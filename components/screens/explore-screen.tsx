"use client"

import { useState } from "react"

export default function ExploreScreen() {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    ageMin: "",
    ageMax: "",
    location: "",
    atnMin: "",
    atnMax: "",
    gender: "",
  })

  const isSetWon = (playerScore: number, opponentScore: number) => {
    return playerScore > opponentScore
  }

  const renderScoreBadges = (playerScores: number[], opponentScores: number[], isPlayerWinner: boolean) => {
    return playerScores.map((score, i) => {
      const isWon = isSetWon(score, opponentScores[i])
      return (
        <div
          key={i}
          className={`w-8 h-6 rounded flex items-center justify-center text-xs font-bold ${
            isWon ? "bg-tl-verde border border-tl-verde text-black" : "bg-white/10 border border-white/20 text-white/60"
          }`}
        >
          {score}
        </div>
      )
    })
  }

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
          <button
            onClick={() => setShowFilters(true)}
            className="text-white/70 hover:text-white flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <section className="mb-6"></section>

      {showFilters && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Filtros de Busca</h3>
              <button onClick={() => setShowFilters(false)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Idade</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.ageMin}
                    onChange={(e) => setFilters({ ...filters, ageMin: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white placeholder-white/50 outline-none focus:border-tl-verde text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.ageMax}
                    onChange={(e) => setFilters({ ...filters, ageMax: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white placeholder-white/50 outline-none focus:border-tl-verde text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">ATN</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Min"
                    value={filters.atnMin}
                    onChange={(e) => setFilters({ ...filters, atnMin: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white placeholder-white/50 outline-none focus:border-tl-verde text-sm"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Max"
                    value={filters.atnMax}
                    onChange={(e) => setFilters({ ...filters, atnMax: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white placeholder-white/50 outline-none focus:border-tl-verde text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Localização</label>
                <input
                  type="text"
                  placeholder="Cidade, Estado"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white placeholder-white/50 outline-none focus:border-tl-verde"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Sexo</label>
                <select
                  value={filters.gender}
                  onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                  className="w-full rounded-xl border border-white/10 py-2 px-3 text-white outline-none focus:border-tl-verde bg-slate-800"
                >
                  <option value="">Todos</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setFilters({
                    ageMin: "",
                    ageMax: "",
                    location: "",
                    atnMin: "",
                    atnMax: "",
                    gender: "",
                  })
                }}
                className="flex-1 py-2 px-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
              >
                Limpar
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-tl-verde to-tl-ciano text-white font-medium hover:opacity-90 transition-opacity"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="mb-6">
        <div className="card p-4">
          <h2 className="text-lg font-bold mb-3 text-center">Meu ATN</h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-r from-[#0063A6] to-[#00A9E0] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white/70">Simples</span>
              </div>
              <div className="text-2xl font-bold text-[#0063A6]">15.2</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gradient-to-r from-[#0063A6] to-[#00C8BB] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">👥</span>
                </div>
                <span className="text-sm font-medium text-white/70">Duplas</span>
              </div>
              <div className="text-2xl font-bold text-[#00C8BB]">14.8</div>
            </div>
          </div>
        </div>
      </section>

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
              <img src="/images/ranking-icon.png" alt="Ranking" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm">Ver Ranking</h3>
            <p className="text-xs text-white/60 mt-1">Confira sua posição</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-extrabold mb-4">Top Ranking</h2>
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
                <div className="text-xs text-white/60">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#0063A6] to-[#00A9E0] rounded-full inline-flex items-center justify-center mr-1">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  {player.atn}
                </div>
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
        <h2 className="text-2xl font-extrabold mb-4">Jogos Recentes</h2>
        <div className="space-y-3">
          {[
            {
              opponent: "Davi Campos Ranieri",
              playerScores: [6, 4, 10],
              opponentScores: [4, 6, 8],
              date: "15/12/2024",
              isWinner: true,
              flag: "🇧🇷",
            },
            {
              opponent: "Marina Silva",
              playerScores: [4, 6, 8],
              opponentScores: [6, 4, 10],
              date: "12/12/2024",
              isWinner: false,
              flag: "🇧🇷",
            },
            {
              opponent: "João Santos",
              playerScores: [7, 5, 12],
              opponentScores: [5, 7, 10],
              date: "10/12/2024",
              isWinner: true,
              flag: "🇧🇷",
            },
          ].map((match, index) => (
            <div key={index} className="card p-3">
              <div className="text-xs text-white/60 mb-2">{match.date}</div>

              {/* User result */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs">{match.flag}</span>
                  <span className="text-xs font-medium">Davi Campos Ranieri</span>
                  {match.isWinner && <span className="text-yellow-500">🏆</span>}
                </div>
                <div className="flex gap-1">
                  {renderScoreBadges(match.playerScores, match.opponentScores, match.isWinner)}
                </div>
              </div>

              {/* Opponent result */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs">{match.flag}</span>
                  <span className="text-xs font-medium">{match.opponent}</span>
                  {!match.isWinner && <span className="text-yellow-500">🏆</span>}
                </div>
                <div className="flex gap-1">
                  {match.opponentScores.map((score, i) => {
                    const opponentWonSet = score > match.playerScores[i]
                    return (
                      <div
                        key={i}
                        className={`w-8 h-6 rounded flex items-center justify-center text-xs font-bold ${
                          opponentWonSet
                            ? "bg-tl-verde border border-tl-verde text-black"
                            : "bg-white/10 border border-white/20 text-white/60"
                        }`}
                      >
                        {score}
                      </div>
                    )
                  })}
                </div>
              </div>
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
        <div className="space-y-2">
          {[
            {
              title: "ETAPA 24 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
              location: "São José dos Campos, São Paulo, Brasil",
              details: "R$ 3.0k Premiação • 30 Jogadores • ATN 1.0 - 100.00 • Simples/duplas • Saibro",
              date: "20/01/2025",
            },
            {
              title: "ETAPA 25 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
              location: "São José dos Campos, São Paulo, Brasil",
              details: "R$ 5.0k Premiação • 64 Jogadores • ATN 1.0 - 100.00 • Simples/duplas • Saibro",
              date: "25/01/2025",
            },
          ].map((event, index) => (
            <div key={index} className="card p-3">
              <div className="text-xs text-white/60 mb-1">{event.date}</div>
              <h4 className="font-bold text-sm mb-1">{event.title}</h4>
              <p className="text-xs text-white/70 mb-2">{event.location}</p>
              <div className="border-t border-[#F1C40F] pt-2">
                <p className="text-xs text-white/70">{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
