export default function LoginForm() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 p-6 pt-24">
        <div className="bg-purple-900 bg-opacity-80 p-16 rounded-lg shadow-2xl max-w-md w-full border border-pink-400 mt-20">
          <h2 className="text-4xl font-bold text-pink-300 text-center mb-10">
            Login
          </h2>
          <form className="max-w-sm mx-auto">
            {/* Email */}
            <div className="mb-6">
              <label className="block text-pink-200 mb-2 text-lg">Email</label>
              <input
                type="email"
                className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                placeholder="Inserisci la tua email"
              />
            </div>
  
            {/* Password */}
            <div className="mb-6">
              <label className="block text-pink-200 mb-2 text-lg">Password</label>
              <input
                type="password"
                className="w-full px-5 py-3 bg-purple-800 text-white border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                placeholder="Inserisci la tua password"
              />
            </div>
  
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-purple-900 font-bold py-4 rounded-lg shadow-lg hover:bg-pink-400 transition text-xl mb-4"
            >
              Accedi
            </button>
          </form>
  
          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a
              href="/password-reset"
              className="text-sm text-pink-200 hover:text-pink-400 transition"
            >
              Hai dimenticato la password?
            </a>
          </div>
  
          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <div className="border-t border-pink-400 w-full"></div>
            <span className="px-4 text-pink-300 text-sm bg-purple-900">oppure</span>
            <div className="border-t border-pink-400 w-full"></div>
          </div>
  
          {/* Social Login Buttons */}
          <div className="space-y-4">
            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white text-purple-900 font-bold py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <div className="flex items-center">
                <img
                  src="/google.svg"
                  alt="Google"
                  className="w-6 h-6 mr-3"
                />
                Accedi con Google
              </div>
            </button>
  
            {/* Apple - Grigio */}
            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
            >
              <div className="flex items-center">
                <img
                  src="/apple.svg"
                  alt="Apple"
                  className="w-6 h-6 mr-3"
                />
                Accedi con Apple
              </div>
            </button>
  
            {/* Facebook */}
            <button
              type="button"
              className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <div className="flex items-center">
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 mr-3"
                />
                Accedi con Facebook
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  