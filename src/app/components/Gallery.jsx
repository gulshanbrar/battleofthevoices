import gallery from "../data/gallery";
import Image from "next/image";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 py-16 px-6">
      <h2 className="text-center text-5xl font-bold text-pink-300 drop-shadow-lg mt-32 mb-14 uppercase tracking-widest">
        La Notte dei Futuri Talenti
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {gallery?.length > 0 ? (
          gallery.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-neon"
            >
              <Image
                src={item.img}
                className="w-full h-full object-cover"
                loading="lazy"
                width={500}
                height={500}
              />
              {/* Overlay sfumato per migliorare leggibilità */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Titolo con effetto glow */}
            </div>
          ))
        ) : (
          <p className="text-center text-white text-lg italic">
            Nessuna immagine disponibile...
          </p>
        )}
      </div>
    </main>
  );
}
