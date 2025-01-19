const VaporCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="w-full p-8 bg-gradient-to-r from-purple-800 via-pink-600 to-cyan-500 backdrop-blur-lg rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.8)] border border-pink-500/60 transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,0,255,1)] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('/vaporwave-grid.png')] bg-cover bg-center opacity-20" />
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] bg-gradient-to-r from-yellow-300 to-pink-500 rounded-full opacity-70 shadow-[0_0_50px_rgba(255,255,0,0.8)] animate-pulse" />

      {/* Icon Container */}
      <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 shadow-[0_0_20px_rgba(255,255,0,0.8)] animate-pulse">
        <Icon className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
      </div>

      {/* Card Content */}
      <h2 className="relative mb-4 text-3xl font-extrabold text-center text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,0.8)] animate-glitch">
        {title}
      </h2>
      <p className="relative text-center text-cyan-200 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] max-w-prose mx-auto text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default VaporCard;
