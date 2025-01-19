"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import HeroButton1 from "./HeroButton1";
import HeroButton2 from "./HeroButton2";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden bg-[#0d0221]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ff00ff0d_25%,transparent_25%,transparent_75%,#00ffff0d_75%,#00ffff0d)]" />

      {/* Retro sun */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#ff6b97] via-[#ff3377] to-transparent rounded-t-full opacity-20" />

      {/* Grid Floor */}
      <div
        className="absolute bottom-0 w-full h-[50vh] 
        bg-[linear-gradient(to_top,rgba(255,107,151,0.2),transparent_50%),linear-gradient(45deg,rgba(0,0,0,0)_0%,rgba(255,107,151,0.1)_50%,rgba(0,0,0,0)_100%)]
        perspective-[1000px] transform-gpu rotate-x-60 scale-y-150 bg-[size:50px_50px]"
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-4 border-pink-500/20 transform rotate-45"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 75 }}
      />
      <motion.div
        className="absolute top-40 right-40 w-24 h-24 border-4 border-cyan-400/20 rounded-full"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 75 }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-20 h-20 border-4 border-purple-500/20 transform rotate-12"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 75 }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 flex flex-col items-center justify-center text-center z-10">
        {/* Title Section */}
        <motion.div
          className="space-y-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter
            bg-gradient-to-r from-cyan-300 via-pink-400 to-purple-500 bg-clip-text text-transparent
            [text-shadow:_4px_4px_0_rgb(255_0_255_/_30%)]
            animate-text-glow relative"
          >
            Battle Of The Voices
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 -z-10" />
          </h1>

          <p
            className="text-2xl sm:text-3xl md:text-4xl font-light text-cyan-300 
            [text-shadow:_0_0_20px_rgb(0_255_255_/_50%)] tracking-wide"
          >
            Il contest per giovani cantautori
          </p>

          {/* Buttons Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center pt-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/contest">
              <HeroButton1 label={"Scopri i partecipanti"} />
            </Link>

            <Link href="/vota">
              <HeroButton2 label={"Partecipa al live event"} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
