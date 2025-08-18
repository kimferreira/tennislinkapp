"use client"

interface LoginScreenProps {
  onLogin: () => void
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30 bg-tl-ciano float"></div>
      <div
        className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full blur-3xl opacity-25 bg-tl-verde float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <section className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="h-24 mx-auto mb-4 opacity-90 flex items-center justify-center w-80">
            <img src="/images/tennis-link-logo.png" alt="Tennis Link" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-extrabold leading-tight">
             
          </h1>
          <p className="text-white/70 mt-1">Jogue, conecte-se e evolua.</p>
        </div>

        <div className="glass rounded-2xl p-5 shadow-soft">
          <button onClick={onLogin} className="btn btn-primary w-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#1f2937"
                d="M21.35 11.1h-9.18v2.96h5.27c-.23 1.38-1.6 4.05-5.27 4.05c-3.17 0-5.75-2.63-5.75-5.87s2.58-5.87 5.75-5.87c1.8 0 3 .76 3.69 1.41l2.52-2.42C16.99 3.86 15.03 3 12.17 3C6.93 3 2.67 7.03 2.67 12.24S6.93 21.5 12.17 21.5c7.01 0 9.3-4.86 9.3-7.3c0-.49-.05-.82-.12-1.1"
              />
            </svg>
            Entrar com Google
          </button>
          <button onClick={onLogin} className="btn btn-outline w-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V8l8 5l8-5z"
              />
            </svg>
            Entrar com e‑mail
          </button>
          <button onClick={onLogin} className="btn btn-outline w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="currentColor"
                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h5v-8H9v-3h3V8a4 4 0 0 1 4-4h3v3h-3a1 1 0 0 0-1 1v3h4l-1 3h-3v8h2a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
              />
            </svg>
            Entrar com Facebook
          </button>
          <p className="text-xs text-white/60 text-center mt-4">
            Ao continuar, você concorda com nossos{" "}
            <a href="#" className="text-tl-verde hover:underline">
              Termos
            </a>{" "}
            e{" "}
            <a href="#" className="text-tl-ciano hover:underline">
              Política
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
