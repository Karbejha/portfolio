export default function Loading() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Loading...</h2>
        <p className="text-[#ADB7BE] mt-2">Please wait while we load Mohamad Karbejha&apos;s portfolio</p>
      </div>
    </div>
  )
}
