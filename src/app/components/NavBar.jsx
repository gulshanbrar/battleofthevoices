import Image from "next/image";
import Link from "next/link";
import Social from "./Social";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-purple-900/30 backdrop-blur-sm border-b border-pink-500/50 shadow-[0_4px_20px_rgba(255,0,255,0.3)] z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo container */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/icon.png"
              alt="logo"
              width={60} // Ridotto per bilanciare la navbar
              height={60}
              className="transition-transform duration-300 hover:scale-105 hover:rotate-3"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
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

        {/* Social links (allineati a destra senza uscire dal container) */}
        <div className="hidden md:flex justify-end">
          <Social />
        </div>
      </div>
    </nav>
  );
}
