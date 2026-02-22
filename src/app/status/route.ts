import { NextResponse } from 'next/server';

export async function GET() {
  const parameters = {
    SUPABASE_URL: !!process.env.SUPABASE_URL,
    SUPABASE_SECRET_KEY: !!process.env.SUPABASE_SECRET_KEY,
  };

  const allConfigured = Object.values(parameters).every(Boolean);
  const status = allConfigured ? 'operational' : 'degraded';
  const uptime = process.uptime();
  const environment = process.env.NODE_ENV;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Status Dashboard</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 700px;
          width: 100%;
          padding: 40px;
        }
        
        h1 {
          color: #333;
          margin-bottom: 30px;
          font-size: 28px;
        }
        
        .status-section {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .status-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 16px;
        }
        
        .status-label {
          color: #666;
          font-weight: 500;
        }
        
        .status-value {
          color: #333;
          font-weight: 600;
        }
        
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .status-operational {
          background-color: #d4edda;
          color: #155724;
        }
        
        .status-degraded {
          background-color: #fff3cd;
          color: #856404;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        
        th {
          background-color: #f8f9fa;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #333;
          border-bottom: 2px solid #dee2e6;
        }
        
        td {
          padding: 12px;
          border-bottom: 1px solid #dee2e6;
          color: #666;
        }
        
        tr:last-child td {
          border-bottom: none;
        }
        
        .param-name {
          font-weight: 500;
          color: #333;
        }
        
        .badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 600;
        }
        
        .badge-defined {
          background-color: #d4edda;
          color: #155724;
        }
        
        .badge-undefined {
          background-color: #f8d7da;
          color: #721c24;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📊 API Status Dashboard</h1>
        
        <div class="status-section">
          <div class="status-item">
            <span class="status-label">System Status:</span>
            <span class="status-badge status-${status}">${status.toUpperCase()}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Environment:</span>
            <span class="status-value">${environment}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Uptime:</span>
            <span class="status-value">${Math.floor(uptime)}s</span>
          </div>
        </div>
        
        <h2 style="font-size: 18px; color: #333; margin-bottom: 15px;">Environment Parameters</h2>
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(parameters)
              .map(
                ([key, defined]) => `
                <tr>
                  <td class="param-name">${key}</td>
                  <td>
                    <span class="badge ${defined ? 'badge-defined' : 'badge-undefined'}">
                      ${defined ? '✓ Defined' : '✗ Undefined'}
                    </span>
                  </td>
                </tr>
              `
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
