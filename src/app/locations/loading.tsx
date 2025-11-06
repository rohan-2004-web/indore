export default function LocationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-pink-300/50 p-12 mb-8">
            <div className="h-8 bg-gradient-to-r from-pink-300 to-orange-300 rounded mb-4"></div>
            <div className="h-4 bg-gradient-to-r from-pink-200 to-orange-200 rounded mb-2"></div>
            <div className="h-4 bg-gradient-to-r from-orange-200 to-pink-200 rounded"></div>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-300/50">
          <p className="text-xl text-gray-800 font-semibold">
            🌟 Loading location information... 🌟
          </p>
        </div>
      </div>
    </div>
  )
}