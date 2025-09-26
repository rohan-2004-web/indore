export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gradient-to-r from-pink-600 to-orange-600 mx-auto mb-8"></div>
        <div className="bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-pink-300/50 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent">
            Loading...
          </h2>
          <p className="text-gray-700 font-semibold">
            Please wait while we prepare your content
          </p>
        </div>
      </div>
    </div>
  )
}