import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Beautiful Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105">
                Saumya Kapoor
              </div>
              <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Elegant & Professional
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/service" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 relative group"
            >
              Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1 group">
            <span className="w-6 h-0.5 bg-gray-600 group-hover:bg-pink-600 transition-colors duration-200"></span>
            <span className="w-6 h-0.5 bg-gray-600 group-hover:bg-pink-600 transition-colors duration-200"></span>
            <span className="w-6 h-0.5 bg-gray-600 group-hover:bg-pink-600 transition-colors duration-200"></span>
          </button>
        </div>
      </div>
    </header>
  );
}