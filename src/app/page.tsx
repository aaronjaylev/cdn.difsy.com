export default function Home() {
  const endpoints = [
    {
      path: '/v1/hello',
      method: 'GET',
      description: 'Returns a greeting message with timestamp',
    },
    {
      path: '/status',
      method: 'GET',
      description: 'Returns API status, uptime, and environment info',
    },
    {
      path: '/v1/data',
      method: 'GET / POST',
      description: 'Get sample data or POST new data to the API',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              API Server
            </h1>
            <p className="text-xl text-slate-300">
              A Next.js API server hosted on Vercel
            </p>
          </div>

          {/* Welcome Message */}
          <div className="rounded-lg bg-slate-800 p-6 ring-1 ring-slate-700">
            <p className="text-lg text-slate-200">
              Welcome to the API! This is a simple API server built with Next.js
              and ready to be deployed on Vercel. Use the endpoints below to
              interact with the API.
            </p>
          </div>

          {/* Endpoints */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Available Endpoints</h2>
            <div className="grid gap-4">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-slate-700/50 p-4 ring-1 ring-slate-600 transition-all hover:bg-slate-700 hover:ring-slate-500"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-block rounded bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono text-blue-300">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-slate-300">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/v1/hello"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
            >
              Try /v1/hello
            </a>
            <a
              href="/status"
              className="rounded-lg bg-slate-700 px-6 py-3 text-center font-semibold text-white transition-all hover:bg-slate-600 active:scale-95"
            >
              Try /status
            </a>
          </div>

          {/* Documentation Link */}
          <div className="text-center">
            <p className="text-slate-400">
              Visit the{" "}
              <a
                href="https://nextjs.org/docs"
                className="font-semibold text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js documentation
              </a>{" "}
              to learn more about building APIs.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        <p>Deployed on Vercel | Built with Next.js</p>
      </footer>
    </div>
  );
}
