"use client"

export default function ExploreScreen() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <img src="/images/tennis-link-logo.png" alt="Tennis Link" className="h-20 w-auto" />
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Procurar"
              className="w-full rounded-2xl bg-white/5 border border-white/10 py-3 pl-10 pr-4 outline-none text-tl placeholder-white/50"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m21 20.3l-5.6-5.6c.9-1.1 1.4-2.6 1.4-4.2C16.8 6.1 13.7 3 10 3S3.2 6.1 3.2 10S6.3 17 10 17c1.6 0 3.1-.5 4.2-1.4l5.6 5.6zM5.7 10c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3S5.7 12.4 5.7 10"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-extrabold mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="card p-4 text-center hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-tl-verde/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-tl-verde" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
            <h3 className="font-bold text-sm">Convidar Jogador</h3>
            <p className="text-xs text-white/60 mt-1">Encontre e convide parceiros</p>
          </div>

          <div className="card p-4 text-center hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-tl-azul/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-tl-azul" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 2L3 14h7v8l11-12h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-sm">Desafiar</h3>
            <p className="text-xs text-white/60 mt-1">Lance um desafio</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold">Top Ranking</h2>
          <button className="text-sm text-tl-verde hover:underline flex items-center gap-1">
            Ver ranking completo <span>›</span>
          </button>
        </div>
        <div className="space-y-3">
          {[
            { position: 1, name: "Carlos Silva", atn: "16.2", medal: "🥇" },
            { position: 2, name: "Ana Costa", atn: "15.8", medal: "🥈" },
            { position: 3, name: "João Santos", atn: "15.5", medal: "🥉" },
          ].map((player) => (
            <div key={player.position} className="card p-3 flex items-center gap-3">
              <span className="text-2xl">{player.medal}</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">{player.name}</div>
                <div className="text-xs text-white/60">ATN {player.atn}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">#{player.position}</div>
                <div className="text-xs text-white/60">São José</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-extrabold mb-4">Atividade Recente</h2>
        <div className="space-y-3">
          {[
            { player1: "Davi Campos", player2: "Marina Silva", score: "6-4, 7-5", time: "2h atrás" },
            { player1: "João Santos", player2: "Carlos Lima", score: "3-6, 6-3, 6-4", time: "4h atrás" },
          ].map((match, index) => (
            <div key={index} className="card p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold">
                  {match.player1} vs {match.player2}
                </div>
                <div className="text-xs text-white/60">{match.time}</div>
              </div>
              <div className="text-xs text-tl-verde">Resultado: {match.score}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold">Próximos Eventos</h2>
          <button className="text-sm text-tl-verde hover:underline flex items-center gap-1">
            Ver todos <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            { title: "Torneio Regional ATN", date: "15 Jan", participants: "32 jogadores" },
            { title: "Copa Tennis Link", date: "22 Jan", participants: "64 jogadores" },
          ].map((event, index) => (
            <div key={index} className="card p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tl-azul/30 to-tl-ciano/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7 3V1h2v2h6V1h2v2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M3 9v10h18V9H3"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm">{event.title}</h3>
                  <p className="text-xs text-white/60">{event.participants}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-tl-verde">{event.date}</div>
                  <button className="text-xs text-tl-ciano hover:underline">Inscrever-se</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
