import { NextResponse } from 'next/server';
import { getServerSupabaseClient } from '@/lib/supabase';
import { addCorsHeaders, handleCorsOptions } from '@/lib/cors';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;

  try {
    // Query Supabase for the form
    const supabase = getServerSupabaseClient();
    const { data, error } = await supabase
      .from('forms')
      .select('form_html, form_css, form_js')
      .eq('form_code', formId)
      .single();

	let html = '';
	let js = '';  
    if (error || !data) {
      // Form not found
      html = `<div style="padding: 20px; background: #fee2e2; border: 1px solid #fca5a5; border-radius: 8px; color: #991b1b; font-family: Arial, sans-serif;">Form ID ${formId} was not found</div>`;
    } else {
      // Form found, include CSS, HTML, and JavaScript
      const css = data.form_css ? `<style>${data.form_css}</style>` : '';
      js = data.form_js ? data.form_js : '';
      html = `${css}${data.form_html}`;
    }

    // Escape the HTML for safe injection into JavaScript string
    const escapedHtml = html
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');

    const javascript = `
(function() {
  const difsyForm = document.getElementById("difsy-form");
  if (difsyForm) {
    difsyForm.innerHTML = \`${escapedHtml}\`;
  }	
  const form_code = ${formId};
  ${js}	
})()`;	  

    const response = new NextResponse(javascript, {
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
    return addCorsHeaders(response);
  } catch (err) {
    const errorMessage = `Error loading form: ${err instanceof Error ? err.message : 'Unknown error'}`;
    const escapedError = errorMessage
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');

    const javascript = `
(function() {
  const formDiv = document.getElementById("difsy-form");
  if (formDiv) {
    formDiv.innerHTML = \`<div style="padding: 20px; background: #fee2e2; border: 1px solid #fca5a5; border-radius: 8px; color: #991b1b; font-family: Arial, sans-serif;">${escapedError}</div>\`;
  }
})()`;

    const response = new NextResponse(javascript, {
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
      status: 500,
    });
    return addCorsHeaders(response);
  }
}

export async function OPTIONS() {
  return handleCorsOptions();
}
