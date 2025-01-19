"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar";
import initialEvents from "../data/initialEvents";

export default function Page() {
  const [events, setEvents] = useState(initialEvents);

  const handleVote = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, i) =>
        i === index ? { ...event, rating: event.rating + 1 } : event
      )
    );
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/vaporwave-grid.png')] bg-cover bg-center opacity-70" />
      <div className="absolute inset-0 pointer-events-none backdrop-blur-lg" />

      {/* Neon Sun */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 rounded-full opacity-80 shadow-[0_0_80px_rgba(255,0,255,0.8)]" />

      <NavBar />

      <motion.h1
        className="mb-10 text-7xl font-extrabold text-white text-center drop-shadow-[0_0_20px_rgba(255,0,255,0.8)] animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🌅 Vota i Futuri Talenti 🌴
      </motion.h1>

      <motion.div
        className="w-full max-w-4xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between p-8 bg-gradient-to-r from-purple-800 via-pink-600 to-cyan-500 backdrop-blur-lg rounded-2xl shadow-[0_0_30px_rgba(255,0,255,0.7)] border border-pink-500/50 hover:scale-105 transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 0, 255, 0.8)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="space-y-3">
              <h2 className="text-4xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] animate-glitch">
                {event.date}
              </h2>
              <p className="text-xl text-cyan-300 font-medium drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                {event.location}
              </p>
              <motion.p
                className="text-3xl text-pink-300 font-bold animate-glitch drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                key={event.rating}
              >
                ⭐ Voti: {event.rating}
              </motion.p>
            </div>
            <motion.button
              onClick={() => handleVote(index)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-lg font-extrabold rounded-full hover:from-pink-500 hover:to-yellow-400 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,255,0.7)] border border-white/30 hover:scale-110"
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 0, 255, 1)",
              }}
            >
              ⚡ Vota Ora
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
