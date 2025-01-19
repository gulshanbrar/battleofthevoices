export default function VaporwaveForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 p-6 pt-24">
      <div className="bg-purple-900 bg-opacity-80 p-16 rounded-lg shadow-2xl max-w-5xl w-full border border-pink-400 mt-20">
        <h2 className="text-5xl font-bold text-pink-300 text-center mb-10">
          Invia la tua Canzone
        </h2>
        <p className="text-pink-200 mb-10 text-xl leading-relaxed text-center">
          <strong>Chi può partecipare?</strong>
          <br />
          Artisti solisti o band (18+), senza limiti di genere musicale.
          <br />
          <br />
          <strong>Come partecipare?</strong>
          <br />
          1. Registrati e carica il tuo brano (audio/video) sulla nostra
          piattaforma.
          <br />
          2. Compila il modulo ricevuto via email.
          <br />
          3. Invia un solo brano, max 5 min, formati: MP3, WAV, MP4.
          <br />
          <br />
          <strong>Premi</strong>
          <br />
          🏆 1° posto: Contratto discografico + €5.000.
          <br />
          🥈 2° posto: €2.500.
          <br />
          I finalisti saranno intervistati da esperti del settore!
          <br />
          <br />
          <strong>Votazioni</strong>
          <br />
          70% voti del pubblico, 30% voti della giuria.
          <br />
          <br />
          <strong>Scadenze</strong>
          <br />
          Iscrizioni: 25/08 - 01/09.
          <br />
          <br />
          <strong>Diritti d’autore</strong>
          <br />
          Devi possedere i diritti del brano inviato.
          <br />
          Partecipando, autorizzi l’uso promozionale dei tuoi brani.
          <br />
          <br />
          <strong>Accettazione</strong>
          <br />
          Partecipando, accetti il regolamento e possibili modifiche.
        </p>
        <form className="max-w-3xl mx-auto">
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
          <div className="mb-8">
            <label className="block text-pink-200 mb-2 text-lg">
              Titolo Canzone
            </label>
            <input
              type="text"
              className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Inserisci il titolo della canzone"
            />
          </div>
          <button
            type="button"
            className="w-full bg-pink-500 text-purple-900 font-bold py-4 rounded-lg shadow-lg hover:bg-pink-400 transition text-xl"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
}
