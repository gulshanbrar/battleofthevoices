// Components
import NavBar from "../components/NavBar";
import VaporCard from "../components/VaporCard";

// Libraries
import { Sunset, Radio, Target, BicepsFlexed } from "lucide-react";

export default function Page() {
  const cards = [
    {
      title: "Come tutto è iniziato",
      description:
        "Music for the Future nasce dal desiderio di creare un'opportunità unica per i giovani talenti musicali di esprimersi e farsi conoscere. L'obiettivo principale è quello di offrire una piattaforma dove i cantautori tra i 18 e i 25 anni possano caricare le loro canzoni, essere ascoltati e votati da un pubblico appassionato e qualificato.",
      icon: Sunset,
    },
    {
      title: "Eventi dal vivo",
      description:
        "La competizione culmina in un evento dal vivo dove i 10 artisti più votati si esibiscono davanti a una giuria di esperti composta da musicisti, giornalisti musicali e discografici. Il vincitore del contest ha l'opportunità di intraprendere un tour europeo, mettendo in luce il proprio talento a livello internazionale.",
      icon: Radio,
    },
    {
      title: "La nostra missione",
      description:
        "Crediamo che la musica sia un linguaggio universale capace di connettere le persone e di ispirare nuove generazioni. Con Music for the Future, vogliamo coltivare la creatività dei giovani artisti, offrendo loro strumenti concreti per costruire il proprio futuro musicale.",
      icon: Target,
    },
    {
      title: "Unisciti a noi",
      description:
        "Che tu sia un giovane musicista, un appassionato di musica, o semplicemente qualcuno che desidera supportare i talenti emergenti, Music for the Future ti invita a far parte di questa avventura unica. Scopri, ascolta e vota i tuoi preferiti: insieme possiamo plasmare il futuro della musica!",
      icon: BicepsFlexed,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 bg-black overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('/vaporwave-grid.png')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 pointer-events-none backdrop-blur-md" />

        {/* Neon Sun */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 rounded-full opacity-80 shadow-[0_0_80px_rgba(255,0,255,0.8)]" />

        <h1 className="text-6xl font-extrabold text-white mb-16 text-center drop-shadow-[0_0_20px_rgba(255,0,255,0.8)] animate-pulse">
          🎶 Dietro le quinte 🎤
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 max-w-6xl">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <VaporCard
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
