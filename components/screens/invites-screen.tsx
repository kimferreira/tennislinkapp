"use client"

import { useState } from "react"

export default function InvitesScreen() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [showLocationSearch, setShowLocationSearch] = useState(false)
  const [locationSearch, setLocationSearch] = useState("")
  const [userLocation, setUserLocation] = useState(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [realAddresses, setRealAddresses] = useState([])

  const [filters, setFilters] = useState({
    ageMin: "",
    ageMax: "",
    location: "",
    atnMin: "",
    atnMax: "",
    gender: "all",
  })
  const [inviteForm, setInviteForm] = useState({
    date: "",
    time: "",
    location: "",
    gameMode: "singles",
    partner: null,
    activeHours: 24,
  })

  const invites = [
    {
      name: "João Pedro Silva",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.1",
      age: "29",
      ranking: "1180",
      timeRemaining: "2 dias e 14:30 horas",
    },
    {
      name: "Maria Fernanda Costa",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.3",
      age: "26",
      ranking: "1050",
      timeRemaining: "1 dia e 08:15 horas",
    },
  ]

  const proposals = [
    {
      name: "Fernanda Santos",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.4",
      age: "27",
      ranking: "920",
      timeRemaining: "3 dias e 12:45 horas",
    },
    {
      name: "Paulo Roberto",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.0",
      age: "33",
      ranking: "1280",
      timeRemaining: "2 dias e 06:20 horas",
    },
  ]

  const suggestedInvites = [
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
  ]

  const availablePlayers = [
    {
      id: 4,
      name: "Lucas Oliveira",
      location: "São José dos Campos, SP",
      rating: "4.1",
      age: 26,
      ranking: "1220",
      gender: "M",
      bio: "Jogador dedicado, treina regularmente. Busca parceiros para melhorar o jogo.",
      preferences: "Simples",
    },
    {
      id: 5,
      name: "Juliana Ferreira",
      location: "São José dos Campos, SP",
      rating: "4.3",
      age: 29,
      ranking: "1080",
      gender: "F",
      bio: "Competidora experiente, gosta de desafios. Disponível para jogos técnicos.",
      preferences: "Simples, Duplas",
    },
    {
      id: 6,
      name: "Pedro Santos",
      location: "São Paulo, SP",
      rating: "3.8",
      age: 24,
      ranking: "1450",
      gender: "M",
      bio: "Jogador iniciante, busca melhorar técnica.",
      preferences: "Simples",
    },
    {
      id: 7,
      name: "Ana Silva",
      location: "Campinas, SP",
      rating: "4.5",
      age: 32,
      ranking: "950",
      gender: "F",
      bio: "Tenista experiente, gosta de jogos competitivos.",
      preferences: "Simples, Duplas",
    },
  ]

  const suggestedLocations = [
    {
      name: "Quadra do Clube ABC",
      address: "Rua das Flores, 123 - Centro",
      coordinates: { lat: -23.1791, lng: -45.8872 },
    },
    {
      name: "Tennis Center São José",
      address: "Av. Cassiano Ricardo, 500",
      coordinates: { lat: -23.2237, lng: -45.9009 },
    },
    {
      name: "Arena Sports",
      address: "Rua do Esporte, 789 - Jardim Aquarius",
      coordinates: { lat: -23.1965, lng: -45.8794 },
    },
  ]

  const filteredPlayers = availablePlayers.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAge =
      (!filters.ageMin || player.age >= Number.parseInt(filters.ageMin)) &&
      (!filters.ageMax || player.age <= Number.parseInt(filters.ageMax))
    const matchesLocation = !filters.location || player.location.toLowerCase().includes(filters.location.toLowerCase())
    const matchesATN =
      (!filters.atnMin || Number.parseFloat(player.rating) >= Number.parseFloat(filters.atnMin)) &&
      (!filters.atnMax || Number.parseFloat(player.rating) <= Number.parseFloat(filters.atnMax))
    const matchesGender = filters.gender === "all" || player.gender === filters.gender

    return matchesSearch && matchesAge && matchesLocation && matchesATN && matchesGender
  })

  const filteredLocations = suggestedLocations.filter(
    (location) =>
      location.name.toLowerCase().includes(locationSearch.toLowerCase()) ||
      location.address.toLowerCase().includes(locationSearch.toLowerCase()),
  )

  const getCurrentLocation = () => {
    setIsLoadingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ lat: latitude, lng: longitude })
          setInviteForm({
            ...inviteForm,
            location: `Minha localização atual (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`,
          })
          setIsLoadingLocation(false)
          setShowLocationSearch(false)

          // Abrir Google Maps com a localização atual
          const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`
          window.open(mapsUrl, "_blank")
        },
        (error) => {
          console.error("Erro ao obter localização:", error)
          setIsLoadingLocation(false)
          alert("Não foi possível obter sua localização. Verifique as permissões do navegador.")
        },
      )
    } else {
      setIsLoadingLocation(false)
      alert("Geolocalização não é suportada neste navegador.")
    }
  }

  const searchRealAddresses = async (query) => {
    if (!query.trim()) {
      setRealAddresses([])
      return
    }

    // Simulação de busca de endereços reais (em produção, usar API do Google Places ou similar)
    const mockAddresses = [
      {
        name: query,
        address: `${query}, São José dos Campos, SP`,
        coordinates: { lat: -23.1791 + Math.random() * 0.01, lng: -45.8872 + Math.random() * 0.01 },
        type: "address",
      },
      {
        name: `Quadra próxima a ${query}`,
        address: `Rua próxima a ${query}, São José dos Campos, SP`,
        coordinates: { lat: -23.1791 + Math.random() * 0.01, lng: -45.8872 + Math.random() * 0.01 },
        type: "court",
      },
      {
        name: `Centro Esportivo ${query}`,
        address: `Av. ${query}, São José dos Campos, SP`,
        coordinates: { lat: -23.1791 + Math.random() * 0.01, lng: -45.8872 + Math.random() * 0.01 },
        type: "sports_center",
      },
    ]

    setRealAddresses(mockAddresses)
  }

  const handleSendInvite = () => {
    console.log("Convite enviado:", { player: selectedPlayer, ...inviteForm })
    setShowInviteModal(false)
    setSelectedPlayer(null)
    setInviteForm({ date: "", time: "", location: "", gameMode: "singles", partner: null, activeHours: 24 })
  }

  const handleRemoveSuggestion = (playerId: number) => {
    console.log("Removendo sugestão:", playerId)
  }

  const handleLocationSelect = (location) => {
    setInviteForm({ ...inviteForm, location: `${location.name} - ${location.address}` })
    setShowLocationSearch(false)
    setLocationSearch("")
    setRealAddresses([])

    const mapsUrl = `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=16`
    window.open(mapsUrl, "_blank")
  }

  const handleManualAddress = () => {
    if (locationSearch.trim()) {
      const manualLocation = {
        name: locationSearch,
        address: locationSearch,
        coordinates: { lat: -23.1791, lng: -45.8872 }, // Coordenadas padrão
        type: "manual",
      }
      handleLocationSelect(manualLocation)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 pb-20">
      {/* Lista de convites */}
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V8l8 5l8-5z"
                />
              </svg>
            </div>
            <h1 className="text-white text-xl font-extrabold">Lista de convites</h1>
          </div>
          <button className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
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
                  Rating: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
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
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V8l8 5l8-5z"
                />
              </svg>
            </div>
            <h1 className="text-white text-xl font-extrabold">Propostas</h1>
          </div>
          <button className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-8">
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
                  Rating: {proposal.rating} | Idade: {proposal.age} | Ranking: {proposal.ranking}
                </p>
                <button className="text-tl-verde text-sm hover:underline">Ver mais</button>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="bg-[#F1C40F] text-black text-xs px-3 py-2 rounded-full text-center min-w-[120px]">
                  <div>Tempo restante</div>
                  <div className="font-semibold">{proposal.timeRemaining}</div>
                </div>
                <div className="flex gap-2">
                  <button className="btn bg-tl-verde text-white text-sm px-3 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                    Aceitar
                  </button>
                  <button className="btn bg-red-500 text-white text-sm px-3 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors">
                    Recusar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sugestões */}
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
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
            <h1 className="text-white text-xl font-extrabold">Sugestões</h1>
          </div>
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

        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-tl-verde/20 text-tl-verde px-4 py-2 rounded-full text-sm font-medium hover:bg-tl-verde/30 transition-colors"
          >
            Filtros Avançados
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 card p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Idade Mín.</label>
                <input
                  type="number"
                  value={filters.ageMin}
                  onChange={(e) => setFilters({ ...filters, ageMin: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  placeholder="18"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Idade Máx.</label>
                <input
                  type="number"
                  value={filters.ageMax}
                  onChange={(e) => setFilters({ ...filters, ageMax: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  placeholder="50"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">ATN Mín.</label>
                <input
                  type="number"
                  step="0.1"
                  value={filters.atnMin}
                  onChange={(e) => setFilters({ ...filters, atnMin: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  placeholder="3.0"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">ATN Máx.</label>
                <input
                  type="number"
                  step="0.1"
                  value={filters.atnMax}
                  onChange={(e) => setFilters({ ...filters, atnMax: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  placeholder="5.0"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Localização</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                  placeholder="São José dos Campos"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Sexo</label>
                <select
                  value={filters.gender}
                  onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
                >
                  <option value="all">Todos</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {(searchTerm || Object.values(filters).some((f) => f && f !== "all")) && (
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
                      Rating: {player.rating} | Idade: {player.age} | Ranking: {player.ranking} |{" "}
                      {player.gender === "M" ? "Masculino" : "Feminino"}
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

      {/* Sugestões */}
      <div className="space-y-3">
        {suggestedInvites.map((player) => (
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

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedPlayer(player)
                    setShowInviteModal(true)
                  }}
                  className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Convidar
                </button>
                <button
                  onClick={() => handleRemoveSuggestion(player.id)}
                  className="btn bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de envio de convite */}
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
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ex: Quadra do Clube ABC"
                    value={inviteForm.location}
                    onChange={(e) => setInviteForm({ ...inviteForm, location: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-10 text-white text-sm"
                  />
                  <button
                    onClick={() => setShowLocationSearch(true)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-tl-verde hover:text-tl-verde/80"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Modo de Jogo</label>
                <select
                  value={inviteForm.gameMode}
                  onChange={(e) => setInviteForm({ ...inviteForm, gameMode: e.target.value })}
                  className="w-full border border-white/20 rounded-lg px-3 py-2 text-sm text-white bg-slate-800"
                >
                  <option value="singles">👤 Simples</option>
                  <option value="doubles">👥 Duplas</option>
                </select>
              </div>

              {inviteForm.gameMode === "doubles" && (
                <div>
                  <label className="block text-sm text-white/70 mb-1">Selecionar Parceiro</label>
                  <select
                    value={inviteForm.partner?.id || ""}
                    onChange={(e) => {
                      const partnerId = e.target.value
                      const partner = availablePlayers.find((p) => p.id.toString() === partnerId)
                      setInviteForm({ ...inviteForm, partner })
                    }}
                    className="w-full border border-white/20 rounded-lg px-3 py-2 text-sm opacity-100 text-white bg-slate-800"
                  >
                    <option value="">Selecione um parceiro</option>
                    {availablePlayers
                      .filter((p) => p.id !== selectedPlayer.id)
                      .map((player) => (
                        <option key={player.id} value={player.id}>
                          {player.name} - ATN {player.rating}
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm text-white/70 mb-1">Convite ativo por (horas)</label>
                <select
                  value={inviteForm.activeHours}
                  onChange={(e) => setInviteForm({ ...inviteForm, activeHours: Number.parseInt(e.target.value) })}
                  className="w-full border border-white/20 rounded-lg px-3 py-2 text-white text-sm bg-slate-800"
                >
                  <option value={6}>6 horas</option>
                  <option value={12}>12 horas</option>
                  <option value={24}>24 horas</option>
                  <option value={48}>48 horas</option>
                  <option value={72}>72 horas</option>
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

      {showLocationSearch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-tl">Selecionar Local</h3>
              <button
                onClick={() => {
                  setShowLocationSearch(false)
                  setLocationSearch("")
                  setRealAddresses([])
                }}
                className="text-white/60 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <button
                onClick={getCurrentLocation}
                disabled={isLoadingLocation}
                className="w-full bg-tl-verde/20 text-tl-verde border border-tl-verde/30 rounded-lg px-4 py-3 font-semibold hover:bg-tl-verde/30 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoadingLocation ? (
                  <>
                    <div className="w-4 h-4 border-2 border-tl-verde border-t-transparent rounded-full animate-spin"></div>
                    Obtendo localização...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Usar Minha Localização
                  </>
                )}
              </button>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite um endereço real..."
                  value={locationSearch}
                  onChange={(e) => {
                    setLocationSearch(e.target.value)
                    searchRealAddresses(e.target.value)
                  }}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-10 text-white text-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {locationSearch.trim() && (
                <button
                  onClick={handleManualAddress}
                  className="w-full mt-2 bg-white/10 text-white rounded-lg px-3 py-2 text-sm hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Usar "{locationSearch}"
                </button>
              )}
            </div>

            <div className="space-y-2">
              {realAddresses.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(location)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-tl-verde/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {location.type === "address" && (
                        <svg className="w-4 h-4 text-tl-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                      )}
                      {location.type === "court" && (
                        <svg className="w-4 h-4 text-tl-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      )}
                      {location.type === "sports_center" && (
                        <svg className="w-4 h-4 text-tl-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-tl text-sm">{location.name}</div>
                      <div className="text-xs text-white/70">{location.address}</div>
                      <div className="text-xs text-tl-verde mt-1">Clique para abrir no Google Maps</div>
                    </div>
                  </div>
                </button>
              ))}

              {!locationSearch && realAddresses.length === 0 && (
                <>
                  <div className="text-sm text-white/60 mb-2">Locais sugeridos:</div>
                  {suggestedLocations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleLocationSelect(location)}
                      className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <div className="font-semibold text-tl text-sm">{location.name}</div>
                      <div className="text-xs text-white/70">{location.address}</div>
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
