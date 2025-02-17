export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 p-6 pt-24">
      <div className="bg-purple-900 bg-opacity-80 p-16 rounded-lg shadow-2xl max-w-3xl w-full border border-pink-400 mt-20">
        <h2 className="text-4xl font-bold text-pink-300 text-center mb-10">
          Contattaci
        </h2>
        <form className="max-w-2xl mx-auto space-y-6">
          {/* Divider: Dati Personali */}
          <div className="border-b border-pink-400 pb-4">
            <h3 className="text-pink-300 font-semibold text-xl mb-4">
              Dati Personali
            </h3>
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
              <div className="relative">
                <input
                  type="email"
                  className="w-full pl-10 px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  placeholder="Inserisci la tua email"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <i className="fas fa-envelope text-pink-400"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Divider: Dettagli Richiesta */}
          <div className="border-b border-pink-400 pb-4">
            <h3 className="text-pink-300 font-semibold text-xl mb-4">
              Dettagli Richiesta
            </h3>
            <div className="mb-6">
              <label className="block text-pink-200 mb-2 text-lg">
                Oggetto della Richiesta
              </label>
              <select
                className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              >
                <option value="supporto">Supporto</option>
                <option value="informazioni">Informazioni Generali</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-pink-200 mb-2 text-lg">Messaggio</label>
              <textarea
                className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                placeholder="Scrivi il tuo messaggio"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-pink-200 mb-2 text-lg">Allega un File</label>
              <input
                type="file"
                className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>
          </div>

          {/* Divider: Preferenze */}
          <div>
            <h3 className="text-pink-300 font-semibold text-xl mb-4">
              Preferenze di Contatto
            </h3>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-purple-800 border border-pink-400 text-pink-400 rounded focus:ring-2 focus:ring-pink-400 transition"
                />
                <span className="text-pink-200">Email</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox bg-purple-800 border border-pink-400 text-pink-400 rounded focus:ring-2 focus:ring-pink-400 transition"
                />
                <span className="text-pink-200">Telefono</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-purple-900 font-bold py-4 rounded-lg shadow-lg hover:bg-pink-400 transition text-xl"
          >
            Invia
          </button>

          {/* Conferma di Invio */}
          <div className="text-center mt-4 text-pink-200 hidden" id="successMessage">
            Grazie per averci contattato! Ti risponderemo al più presto.
          </div>
        </form>
      </div>
    </div>
  );
}
