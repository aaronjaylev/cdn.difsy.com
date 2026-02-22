export const dynamic = "force-static";

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <main>
    <section class="bg-gray-100 dark:bg-gray-800 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Code Demo
        </h2>

        <div class="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-8 border border-gray-300 dark:border-gray-600 shadow-md">
          <div class="bg-gray-300 dark:bg-gray-600 px-4 py-2 border-b border-gray-300 dark:border-gray-600 flex items-center gap-2">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span class="text-xs text-gray-600 dark:text-gray-300 ml-2 font-mono">
              HTML
            </span>
          </div>
          <pre class="text-gray-800 dark:text-gray-100 text-sm p-6 overflow-x-auto font-mono"><code>&lt;div id="difsy-form"&gt;&lt;/div&gt;
&lt;script src="/advanced-contact/41555582"&gt;&lt;/script&gt;</code></pre>
        </div>

        <div class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Form Below:
          </h3>
          <div id="difsy-form"></div>
          <script src="/advanced-contact/41555582"></script>
        </div>
      </div>
    </section>
  </main>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
