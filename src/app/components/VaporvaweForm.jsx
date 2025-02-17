export default function VaporwaveForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 p-6 pt-24">
      <div className="bg-purple-900 bg-opacity-80 p-16 rounded-lg shadow-2xl max-w-5xl w-full border border-pink-400 mt-20">
        {/* Intestazione */}
        <h2 className="text-5xl font-bold text-pink-300 text-center mb-10">
          Partecipa al Nostro Contest Musicale! 🌟
        </h2>

        {/* Regolamento */}
        <div className="text-pink-200 mb-12 text-lg leading-relaxed space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              Chi può partecipare?
            </h3>
            <p>
              Artisti solisti o band di almeno 18 anni. Nessun limite di genere
              musicale: rock, pop, jazz, elettronica, e altro!
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              Come partecipare?
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Registrati e carica il tuo brano (audio/video) sulla piattaforma.</li>
              <li>Compila il modulo ricevuto via email.</li>
              <li>
                Carica un solo brano per partecipante (max 5 minuti) nei formati: MP3, WAV, MP4.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Premi</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>🏅 <strong>1° posto:</strong> Contratto discografico e 5.000€.</li>
              <li>🥈 <strong>2° posto:</strong> 2.500€.</li>
              <li>
                I finalisti saranno intervistati da esperti del settore!
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Votazioni</h3>
            <p>
              Il vincitore sarà scelto da una combinazione di:
              <strong> 70% voti del pubblico</strong> e <strong>30% voti della giuria</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              Scadenze
            </h3>
            <p>
              Le iscrizioni sono aperte dal <strong>25/08</strong> al <strong>01/09</strong>.
              Non aspettare l’ultimo momento!
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              Diritti d’autore
            </h3>
            <p>
              Devi possedere i diritti sul brano inviato e autorizzi l’uso
              promozionale della tua musica.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">
              Accettazione del Regolamento
            </h3>
            <p>
              Partecipando, accetti il regolamento e le eventuali modifiche che
              potrebbero essere apportate.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-12">
          <div className="flex-grow border-t border-pink-500"></div>
          <span className="flex-shrink mx-4 text-pink-300 font-bold text-xl">
            Registrazione
          </span>
          <div className="flex-grow border-t border-pink-500"></div>
        </div>

        {/* Modulo di Registrazione */}
        <form className="max-w-3xl mx-auto space-y-8">
          <div>
            <label className="block text-pink-200 mb-2 text-lg">Nome</label>
            <input
              type="text"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Inserisci il tuo nome"
            />
          </div>

          <div>
            <label className="block text-pink-200 mb-2 text-lg">Email</label>
            <input
              type="email"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Inserisci la tua email"
            />
          </div>

          <div>
            <label className="block text-pink-200 mb-2 text-lg">
              Titolo della Canzone
            </label>
            <input
              type="text"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Inserisci il titolo della canzone"
            />
          </div>

          <div>
            <label className="block text-pink-200 mb-2 text-lg">
              Carica il tuo brano
            </label>
            <input
              type="file"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              accept="audio/mp3, audio/wav, video/mp4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-purple-900 font-bold py-4 rounded-lg shadow-lg hover:bg-pink-400 transition text-xl"
          >
            Invia la Tua Canzone 🎵
          </button>
        </form>
      </div>
    </div>
  );
}
