export default function RankingScreen() {
  const rankings = [
    {
      position: 1,
      name: "Ana Paula Silva",
      location: "São José dos Campos, SP",
      rating: "4.8",
      points: "2450",
      medal: "🥇",
    },
    {
      position: 2,
      name: "Carlos Eduardo Santos",
      location: "São José dos Campos, SP",
      rating: "4.7",
      points: "2380",
      medal: "🥈",
    },
    {
      position: 3,
      name: "Mariana Costa",
      location: "São José dos Campos, SP",
      rating: "4.6",
      points: "2320",
      medal: "🥉",
    },
    {
      position: 4,
      name: "Roberto Almeida",
      location: "São José dos Campos, SP",
      rating: "4.5",
      points: "2280",
    },
    {
      position: 5,
      name: "Fernanda Oliveira",
      location: "São José dos Campos, SP",
      rating: "4.4",
      points: "2240",
    },
    {
      position: 6,
      name: "João Silva",
      location: "São José dos Campos, SP",
      rating: "4.3",
      points: "2200",
    },
    {
      position: 7,
      name: "Maria Santos",
      location: "São José dos Campos, SP",
      rating: "4.2",
      points: "2160",
    },
    {
      position: 8,
      name: "Pedro Costa",
      location: "São José dos Campos, SP",
      rating: "4.1",
      points: "2120",
    },
    {
      position: 9,
      name: "Ana Oliveira",
      location: "São José dos Campos, SP",
      rating: "4.0",
      points: "2080",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header com gradiente verde/ciano */}
      <div className="bg-[linear-gradient(135deg,var(--tl-verde),var(--tl-ciano))] rounded-3xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <img src="/images/ranking-icon.png" alt="Ranking" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white text-xl font-extrabold">Tennis Link</h1>
            <p className="text-white/80 text-sm">Supere seus desafios e conquiste a melhor versão de si mesmo!</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-white flex items-center gap-2">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lista de ranking */}
      <div className="space-y-3">
        {rankings.map((player, index) => (
          <div key={index} className="card p-4 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {player.medal ? (
                  <div className="text-2xl">{player.medal}</div>
                ) : (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {player.position}
                  </div>
                )}
              </div>

              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-tl">{player.name}</h3>
                <p className="text-sm text-white/70">{player.location}</p>
                <p className="text-sm text-white/70">Idade: xx</p>
                <button className="text-tl-verde text-sm hover:underline mt-1">Ver mais</button>
              </div>

              <div className="text-right">
                <div className="text-sm text-white/60 mb-1">Rating:</div>
                <div className="text-xl font-bold text-tl">{player.rating}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
