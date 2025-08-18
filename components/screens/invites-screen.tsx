"use client"

import { useState } from "react"

export default function InvitesScreen() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [inviteForm, setInviteForm] = useState({
    date: "",
    time: "",
    location: "",
    gameMode: "singles",
    activeDays: 4,
  })

  const invites = [
    {
      name: "João Pedro Silva",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.1",
      age: "29",
      ranking: "1180",
      timeRemaining: "0 dias e 00:00 horas",
    },
    {
      name: "Maria Fernanda Costa",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.3",
      age: "26",
      ranking: "1050",
      timeRemaining: "0 dias e 00:00 horas",
    },
    {
      name: "Ricardo Almeida",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "3.9",
      age: "31",
      ranking: "1320",
      timeRemaining: "0 dias e 00:00 horas",
    },
  ]

  const proposals = [
    {
      name: "Fernanda Santos",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.4",
      age: "27",
      ranking: "920",
      timeRemaining: "0 dias e 00:00 horas",
    },
    {
      name: "Paulo Roberto",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.0",
      age: "33",
      ranking: "1280",
      timeRemaining: "0 dias e 00:00 horas",
    },
    {
      name: "Ana Carolina",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.2",
      age: "25",
      ranking: "1100",
      timeRemaining: "0 dias e 00:00 horas",
    },
    {
      name: "Roberto Silva",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.1",
      age: "30",
      ranking: "1200",
      timeRemaining: "0 dias e 00:00 horas",
    },
  ]

  const availablePlayers = [
    {
      id: 1,
      name: "Carlos Silva",
      location: "São José dos Campos, SP",
      rating: "4.2",
      age: "28",
      ranking: "1150",
      bio: "Jogador experiente, gosta de jogos competitivos. Disponível para partidas nos finais de semana.",
      preferences: "Simples, Duplas",
    },
    {
      id: 2,
      name: "Marina Costa",
      location: "São José dos Campos, SP",
      rating: "4.0",
      age: "25",
      ranking: "1280",
      bio: "Tenista amadora, busca melhorar técnica. Prefere jogos descontraídos.",
      preferences: "Simples",
    },
    {
      id: 3,
      name: "Rafael Santos",
      location: "São José dos Campos, SP",
      rating: "4.5",
      age: "32",
      ranking: "980",
      bio: "Ex-competidor, agora joga por diversão. Muito técnico e paciente.",
      preferences: "Simples, Duplas",
    },
  ]

  const filteredPlayers = availablePlayers.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSendInvite = () => {
    // Lógica para enviar convite
    console.log("Convite enviado:", { player: selectedPlayer, ...inviteForm })
    setShowInviteModal(false)
    setSelectedPlayer(null)
    setInviteForm({ date: "", time: "", location: "", gameMode: "singles", activeDays: 4 })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Lista de convites */}
      <div className="bg-[linear-gradient(135deg,var(--tl-verde),var(--tl-ciano))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V8l8 5l8-5z"
                />
              </svg>
            </div>
            <h1 className="text-white text-xl font-extrabold">Lista de convites</h1>
          </div>
          <button className="text-white flex items-center gap-2">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar parceiros para convidar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 pl-12 text-white placeholder-white/60 focus:outline-none focus:border-tl-verde"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 14 9.5 14c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            />
          </svg>
        </div>

        {searchTerm && (
          <div className="mt-4 space-y-3">
            {filteredPlayers.map((player) => (
              <div key={player.id} className="card p-4 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-tl">{player.name}</h3>
                    <p className="text-sm text-white/70 mb-1">{player.location}</p>
                    <p className="text-sm text-white/70 mb-2">
                      Rating: {player.rating} | Idade: {player.age} | Ranking: {player.ranking}
                    </p>
                    <p className="text-sm text-white/60 mb-2">{player.bio}</p>
                    <p className="text-xs text-tl-verde">Preferências: {player.preferences}</p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPlayer(player)
                      setShowInviteModal(true)
                    }}
                    className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    Convidar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {invites.map((invite, index) => (
          <div key={index} className="card p-4 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-tl">{invite.name}</h3>
                <p className="text-sm text-white/70 mb-1">{invite.location}</p>
                <p className="text-sm text-white/70 mb-2">
                  Rating: {invite.rating} Idade: {invite.age} Ranking: {invite.ranking}
                </p>
                <button className="text-tl-verde text-sm hover:underline">Ver mais</button>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="bg-tl-verde text-white text-xs px-3 py-2 rounded-full text-center min-w-[120px]">
                  <div>Tempo restante</div>
                  <div className="font-semibold">{invite.timeRemaining}</div>
                </div>
                <button className="btn bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Propostas */}
      <div className="bg-[linear-gradient(135deg,var(--tl-verde),var(--tl-ciano))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V8l8 5l8-5z"
                />
              </svg>
            </div>
            <h1 className="text-white text-xl font-extrabold">Propostas</h1>
          </div>
          <button className="text-white flex items-center gap-2">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {proposals.map((proposal, index) => (
          <div key={index} className="card p-4 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-tl">{proposal.name}</h3>
                <p className="text-sm text-white/70 mb-1">{proposal.location}</p>
                <p className="text-sm text-white/70 mb-2">
                  Rating: {proposal.rating} Idade: {proposal.age} Ranking: {proposal.ranking}
                </p>
                <button className="text-tl-verde text-sm hover:underline">Ver mais</button>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="bg-[#F1C40F] text-black text-xs px-3 py-2 rounded-full text-center min-w-[120px]">
                  <div>Tempo restante</div>
                  <div className="font-semibold">{proposal.timeRemaining}</div>
                </div>
                <button className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Ver proposta
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showInviteModal && selectedPlayer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-tl">Enviar Convite</h3>
              <button onClick={() => setShowInviteModal(false)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4 p-3 bg-white/5 rounded-lg">
              <p className="text-tl font-semibold">{selectedPlayer.name}</p>
              <p className="text-sm text-white/70">{selectedPlayer.location}</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Data</label>
                  <input
                    type="date"
                    value={inviteForm.date}
                    onChange={(e) => setInviteForm({ ...inviteForm, date: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Horário</label>
                  <input
                    type="time"
                    value={inviteForm.time}
                    onChange={(e) => setInviteForm({ ...inviteForm, time: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Local</label>
                <input
                  type="text"
                  placeholder="Ex: Quadra do Clube ABC"
                  value={inviteForm.location}
                  onChange={(e) => setInviteForm({ ...inviteForm, location: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Modo de Jogo</label>
                <select
                  value={inviteForm.gameMode}
                  onChange={(e) => setInviteForm({ ...inviteForm, gameMode: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                >
                  <option value="singles">Simples</option>
                  <option value="doubles">Duplas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Convite ativo por (dias)</label>
                <select
                  value={inviteForm.activeDays}
                  onChange={(e) => setInviteForm({ ...inviteForm, activeDays: Number.parseInt(e.target.value) })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                >
                  <option value={1}>1 dia</option>
                  <option value={2}>2 dias</option>
                  <option value={3}>3 dias</option>
                  <option value={4}>4 dias</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowInviteModal(false)}
                className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSendInvite}
                className="flex-1 bg-tl-verde text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Enviar Convite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
