export default function HeroButton1({ label, onClick }) {
  return (
    <button
      className="px-10 py-4 text-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-white rounded-xl
              transform hover:scale-105 transition-all duration-300 
              hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] 
              border-2 border-cyan-400/30 relative overflow-hidden group"
      onClick={onClick}
    >
      <span className="relative z-10">{label}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
