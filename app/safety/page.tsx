"use client"

export default function SafetyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-emerald-600 dark:text-emerald-400">
          Safety Guidelines
        </h1>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>Always meet in a public, well-lit location.</li>
          <li>Bring a friend or notify someone of your meeting.</li>
          <li>Inspect items carefully before completing a trade.</li>
          <li>Use our in-app chat to keep conversation records.</li>
        </ol>
      </div>
    </main>
  )
}
