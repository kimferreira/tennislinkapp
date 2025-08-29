"use client"

import { useState } from "react"

export default function ChallengesScreen() {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    ageMin: "",
    ageMax: "",
    location: "",
    atnMin: "",
    atnMax: "",
    gender: "",
  })

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
      gender: "M",
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
      gender: "F",
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
      gender: "M",
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
          <button
            onClick={() => setShowFilters(true)}
            className="text-white flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition-colors"
          >
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-sm mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white border-2 border-[#0063A6] rounded-lg px-3 py-1">
                Filtros de Busca
              </h3>
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
                  className="w-full rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white placeholder-white/50 outline-none focus:border-tl-verde text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Sexo</label>
                <select
                  value={filters.gender}
                  onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                  className="w-full rounded-xl border border-white/10 py-2 px-3 text-white outline-none focus:border-tl-verde text-sm bg-slate-800"
                >
                  <option value="">Todos</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
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
                className="py-3 px-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors text-sm"
              >
                Limpar
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-tl-verde to-tl-ciano text-white font-medium hover:opacity-90 transition-opacity text-sm"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

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
                  ATN: {challenge.rating} Idade: {challenge.age} Ranking: {challenge.ranking}
                </p>
                <p className="text-sm text-white/70 mb-1">
                  Data e hora: {challenge.date} às {challenge.time} Modo de jogo: {challenge.gameMode}
                </p>
                <p className="text-sm text-white/70 mb-1">Local: {challenge.venue}</p>
                <p className="text-sm text-white/70 mb-2">Tempo restante: {challenge.timeRemaining}</p>
                <button className="text-tl-verde text-sm hover:underline">Ver mais</button>
              </div>

              <div className="flex flex-col gap-2">
                <button className="btn bg-[#F1C40F] text-black text-sm px-4 py-2 rounded-full font-semibold hover:bg-[#F39C12] transition-colors bg-emerald-300">
                  Aceitar
                </button>
                <button className="btn bg-tl-azul text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Proposta
                </button>
                <button className="btn text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors bg-slate-500">
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
