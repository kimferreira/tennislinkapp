"use client"

export default function JogosMarcadosScreen() {
  const scheduledGames = [
    {
      id: 1,
      opponent: "Davi Campos Ranieri",
      date: "2024-12-20",
      time: "14:00",
      location: "Quadra Central",
      status: "confirmado",
    },
    {
      id: 2,
      opponent: "Marina Silva",
      date: "2024-12-19",
      time: "16:30",
      location: "Tennis Club",
      status: "em_andamento",
    },
    {
      id: 3,
      opponent: "João Santos",
      date: "2024-12-18",
      time: "09:00",
      location: "Arena Sports",
      status: "finalizado",
      result: "6-4, 7-5",
    },
  ]

  return (
    <section className="pb-20">
      <div className="bg-[linear-gradient(135deg,var(--tl-verde),var(--tl-ciano),var(--tl-azul))] rounded-3xl mx-4 mt-4 p-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-white">Jogos</h1>
        <div className="ml-auto">
          <button className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium flex items-center gap-2">
            Filtros
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {scheduledGames.map((game) => (
            <div key={game.id} className="card p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{game.opponent}</h3>
                    <p className="text-sm text-white/70">
                      {game.date} às {game.time}
                    </p>
                    <p className="text-xs text-white/60">{game.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      game.status === "confirmado"
                        ? "bg-tl-verde/20 text-tl-verde"
                        : game.status === "em_andamento"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {game.status === "confirmado"
                      ? "Confirmado"
                      : game.status === "em_andamento"
                        ? "Em Andamento"
                        : "Finalizado"}
                  </div>
                  {game.result && <p className="text-xs text-white/60 mt-1">Resultado: {game.result}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
