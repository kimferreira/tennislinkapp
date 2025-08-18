export default function ChallengesScreen() {
  const challenges = [
    {
      name: "Carlos Silva Santos",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.2",
      age: "28",
      ranking: "1250",
      date: "15/12/2024",
      time: "14:30",
      gameMode: "Simples",
      venue: "Quadra Central",
      timeRemaining: "2 dias e 14:30 horas",
    },
    {
      name: "Ana Paula Oliveira",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.5",
      age: "32",
      ranking: "980",
      date: "16/12/2024",
      time: "09:00",
      gameMode: "Duplas",
      venue: "Tennis Club",
      timeRemaining: "3 dias e 09:00 horas",
    },
    {
      name: "Roberto Mendes",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.0",
      age: "35",
      ranking: "1450",
      date: "17/12/2024",
      time: "16:00",
      gameMode: "Simples",
      venue: "Clube Esportivo",
      timeRemaining: "4 dias e 16:00 horas",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header com gradiente verde */}
      <div className="bg-[linear-gradient(135deg,var(--tl-verde),var(--tl-ciano))] rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path fill="currentColor" d="M13 2L3 14h7v8l11-12h-7z" />
            </svg>
          </div>
          <h1 className="text-white text-xl font-extrabold">Meus Desafios</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Procurar Adversário"
              className="w-full rounded-2xl bg-white/90 border-0 py-3 pl-4 pr-12 outline-none text-gray-800 placeholder-gray-500"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m21 20.3l-5.6-5.6c.9-1.1 1.4-2.6 1.4-4.2C16.8 6.1 13.7 3 10 3S3.2 6.1 3.2 10S6.3 17 10 17c1.6 0 3.1-.5 4.2-1.4l5.6 5.6zM5.7 10c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3S5.7 12.4 5.7 10"
              />
            </svg>
          </div>
          <button className="text-white flex items-center gap-2">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lista de desafios */}
      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div key={index} className="card p-4 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-tl">{challenge.name}</h3>
                <p className="text-sm text-white/70 mb-1">{challenge.location}</p>
                <p className="text-sm text-white/70 mb-1">
                  Rating: {challenge.rating} Idade: {challenge.age} Ranking: {challenge.ranking}
                </p>
                <p className="text-sm text-white/70 mb-1">
                  Data e hora: {challenge.date} às {challenge.time} Modo de jogo: {challenge.gameMode}
                </p>
                <p className="text-sm text-white/70 mb-1">Local: {challenge.venue}</p>
                <p className="text-sm text-white/70 mb-2">Tempo restante: {challenge.timeRemaining}</p>
                <button className="text-tl-verde text-sm hover:underline">Ver mais</button>
              </div>

              <div className="flex flex-col gap-2">
                <button className="btn bg-[#F1C40F] text-black text-sm px-4 py-2 rounded-full font-semibold hover:bg-[#F39C12] transition-colors">
                  Aceitar
                </button>
                <button className="btn bg-tl-azul text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Proposta
                </button>
                <button className="btn bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Recusar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
