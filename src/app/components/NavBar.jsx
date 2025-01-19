import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-purple-900/30 backdrop-blur-sm border-b border-pink-500/50 shadow-[0_4px_20px_rgba(255,0,255,0.3)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo container */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/icon.png"
                alt="logo"
                width={80}
                height={80}
                className="transition-transform duration-300 hover:scale-105 hover:rotate-3"
              />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-cyan-300 hover:text-pink-400 hover:bg-purple-900/40 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              >
                Home
              </Link>
              <Link
                href="/quinte"
                className="text-cyan-300 hover:text-pink-400 hover:bg-purple-900/40 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              >
                Dietro le quinte
              </Link>
              <Link
                href="/contest"
                className="text-cyan-300 hover:text-pink-400 hover:bg-purple-900/40 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              >
                Iscriviti al contest
              </Link>
              <Link
                href="/vota"
                className="text-cyan-300 hover:text-pink-400 hover:bg-purple-900/40 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              >
                Vota ora
              </Link>
              <Link
                href="/live"
                className="text-cyan-300 hover:text-pink-400 hover:bg-purple-900/40 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              >
                Evento live
              </Link>
              <Link
                href="/contattaci"
                className="text-cyan-300 hover:text-pink-400 hover:bg-purple-900/40 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
