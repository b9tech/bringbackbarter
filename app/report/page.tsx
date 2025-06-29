"use client"

export default function ReportIssuePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 px-4">
      <form className="w-full max-w-lg bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Report an Issue</h1>
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Describe the problem</span>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            rows={5}
            required
          />
        </label>
        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </main>
  )
}
