import { NextResponse } from 'next/server';

// CORS headers to allow requests from any origin
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export function addCorsHeaders(response: NextResponse) {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export async function handleCorsOptions() {
  return addCorsHeaders(new NextResponse(null, { status: 200 }));
}

export function corsError(status: number, error: string) {
	console.error('❌ ' + error);
	return addCorsHeaders(NextResponse.json(
		{ success: 0, error },
		{ status }
	));
}

