"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar";
import initialEvents from "../data/initialEvents";

export default function Page() {
  const [events, setEvents] = useState(initialEvents);
  const [showPopup, setShowPopup] = useState(false); // Stato per il popup

  const handleVote = () => {
    setShowPopup(true); // Mostra il popup
  };

  const closePopup = () => {
    setShowPopup(false); // Chiudi il popup
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
                {event.artist}
              </h2>
              <p className="text-xl text-cyan-300 font-medium drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                {event.track}
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
              onClick={handleVote} // Mostra il popup al click
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-lg font-extrabold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,0,255,0.7)] border border-white/30 hover:scale-110 hover:from-pink-500 hover:to-yellow-400"
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

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative p-8 bg-gradient-to-r from-purple-900 via-pink-800 to-cyan-700 text-white rounded-2xl shadow-[0_0_50px_rgba(255,0,255,0.8)] border border-pink-500 max-w-lg w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2 className="text-3xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] text-center">
              ⚠️ Effettua il Login
            </h2>
            <p className="mt-4 text-xl text-cyan-300 text-center">
              Per votare, devi effettuare l'accesso al tuo account.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-lg font-bold rounded-full shadow-lg hover:from-pink-500 hover:to-yellow-400 transition-all duration-300"
                onClick={closePopup}
              >
                Chiudi
              </button>
              <button
                className="px-6 py-3 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 text-purple-900 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
