import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;

  // Return HTML that will inject text into the difsy-form div
	const javascript = `
(function() {
  // Find the div with id="difsy-form" and inject content
  const formDiv = document.getElementById("difsy-form");
  if (formDiv) {
	formDiv.innerHTML = 'Difsy Form ${formId}';
  }
})()`;

  return new NextResponse(javascript, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  });
}
