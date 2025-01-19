export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 p-6 pt-24">
      <div className="bg-purple-900 bg-opacity-80 p-16 rounded-lg shadow-2xl max-w-3xl w-full border border-pink-400 mt-20">
        <h2 className="text-4xl font-bold text-pink-300 text-center mb-10">
          Contattaci
        </h2>
        <form className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label className="block text-pink-200 mb-2 text-lg">Nome</label>
            <input
              type="text"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Inserisci il tuo nome"
            />
          </div>
          <div className="mb-6">
            <label className="block text-pink-200 mb-2 text-lg">Email</label>
            <input
              type="email"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Inserisci la tua email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-pink-200 mb-2 text-lg">
              Messaggio
            </label>
            <textarea
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Scrivi il tuo messaggio"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-purple-900 font-bold py-4 rounded-lg shadow-lg hover:bg-pink-400 transition text-xl"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
}
