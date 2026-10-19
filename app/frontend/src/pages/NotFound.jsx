import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Page not found | 7DataWin'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-emerald-400 font-bold text-5xl mb-4">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Page not found</h1>
      <p className="text-gray-400 mb-8">The page you are looking for does not exist or has been moved.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/20"
      >
        Go to Home
      </Link>
    </div>
  )
}
