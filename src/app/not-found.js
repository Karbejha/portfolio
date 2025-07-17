import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found - Mohamad Karbejha',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-[#ADB7BE] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white rounded-full inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full inline-block"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
