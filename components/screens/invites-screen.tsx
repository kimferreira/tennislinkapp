"use client"

import { useState } from "react"

export default function InvitesScreen() {
  const [activeTab, setActiveTab] = useState("enviados")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [showOpenInviteModal, setShowOpenInviteModal] = useState(false)
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false)
  const [showAvailabilityPreview, setShowAvailabilityPreview] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [showLocationSearch, setShowLocationSearch] = useState(false)
  const [showPartnerSelection, setShowPartnerSelection] = useState("")
  const [partnerSearchTerm, setPartnerSearchTerm] = useState("")
  const [locationSearch, setLocationSearch] = useState("")
  const [userLocation, setUserLocation] = useState(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [realAddresses, setRealAddresses] = useState([])

  const [availability, setAvailability] = useState({
    selectedDays: [],
    selectedTimes: {}, // Agora armazena arrays de horários por dia
    differentTimes: false,
    showDaySelection: false,
    showTimeSelection: false,
    primaryTime: "10:00",
  })

  const [filters, setFilters] = useState({
    ageMin: "",
    ageMax: "",
    location: "",
    atnMin: "",
    atnMax: "",
    gender: "all",
  })
  const [inviteForm, setInviteForm] = useState({
    location: "",
    gameMode: "singles",
    partner: null,
    activeHours: 24,
  })

  const invitesEnviados = [
    {
      name: "João Pedro",
      location: "Sao jose dos campos, sp, brasil",
      rating: "4.24",
      age: "28",
      ranking: "1250",
      date: "15/12/2024 às 14:30",
      gameMode: "Simples",
      local: "Quadra central",
      timeRemaining: "3 dias e 12:25 horas",
    },
  ]

  const invitesRecebidos = [
    {
      name: "Fernanda",
      location: "Sao jose dos campos, sp, brasil",
      rating: "4.24",
      age: "28",
      ranking: "1250",
      date: "15/12/2024 às 14:30",
      gameMode: "Simples",
      local: "Quadra central",
      timeRemaining: "3 dias e 12:25 horas",
    },
  ]

  const invitesAbertos = [
    {
      name: "Fernanda",
      location: "São José dos Campos, SP",
      rating: "4.24",
      age: "28",
      ranking: "1250",
      date: "15/12/2024 às 14:30",
      gameMode: "Simples",
      local: "Quadra central",
    },
  ]

  const invitesRecomendados = [
    {
      id: 1,
      name: "Carlos Silva",
      location: "São José dos Campos, SP",
      rating: "4.24",
      age: "28",
      ranking: "1250",
      bio: "Jogador experiente, gosta de jogos competitivos. Disponível para partidas nos finais de semana",
      preferences: "Simples, Duplas",
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

  const suggestedPartners = [
    {
      id: 1,
      name: "Ana Paula Silva",
      location: "São José dos Campos, SP, Brasil",
      rating: "4.24",
      age: "28",
      ranking: "1250",
    },
    {
      id: 2,
      name: "Ana Paula Silva",
      location: "São José dos Campos, SP, Brasil",
      rating: "4.24",
      age: "28",
      ranking: "1250",
    },
    {
      id: 3,
      name: "Ana Paula Silva",
      location: "São José dos Campos, SP, Brasil",
      rating: "4.24",
      age: "28",
      ranking: "1250",
    },
    {
      id: 4,
      name: "Ana Paula Silva",
      location: "São José dos Campos, SP, Brasil",
      rating: "4.24",
      age: "28",
      ranking: "1250",
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

  const filteredPartners = suggestedPartners.filter((partner) =>
    partner.name.toLowerCase().includes(partnerSearchTerm.toLowerCase()),
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

  const handleDayToggle = (dayId) => {
    const updatedDays = availability.selectedDays.includes(dayId)
      ? availability.selectedDays.filter((d) => d !== dayId)
      : [...availability.selectedDays, dayId]

    setAvailability({
      ...availability,
      selectedDays: updatedDays,
    })
  }

  const handleTimeSelection = (day, time) => {
    const currentTimes = availability.selectedTimes[day] || []
    const updatedTimes = currentTimes.includes(time)
      ? currentTimes.filter((t) => t !== time)
      : [...currentTimes, time].sort()

    setAvailability({
      ...availability,
      selectedTimes: {
        ...availability.selectedTimes,
        [day]: updatedTimes,
      },
    })
  }

  const addTimeToDay = (dayId) => {
    const currentTimes = availability.selectedTimes[dayId] || []
    if (currentTimes.length === 0) {
      setAvailability({
        ...availability,
        selectedTimes: {
          ...availability.selectedTimes,
          [dayId]: ["10:00"],
        },
      })
    }
  }

  const removeTimeFromDay = (dayId, timeToRemove) => {
    const currentTimes = availability.selectedTimes[dayId] || []
    const updatedTimes = currentTimes.filter((time) => time !== timeToRemove)

    setAvailability({
      ...availability,
      selectedTimes: {
        ...availability.selectedTimes,
        [dayId]: updatedTimes,
      },
    })
  }

  const handleSendInvite = () => {
    console.log("Convite enviado:", { player: selectedPlayer, ...inviteForm, availability })
    setShowInviteModal(false)
    setSelectedPlayer(null)
    setInviteForm({ location: "", gameMode: "singles", partner: null, activeHours: 24 })
    setAvailability({
      selectedDays: [],
      selectedTimes: {},
      differentTimes: false,
      showDaySelection: false,
      showTimeSelection: false,
      primaryTime: "10:00",
    })
  }

  const handleSendOpenInvite = () => {
    console.log("Convite aberto enviado:", { ...inviteForm, availability })
    setShowOpenInviteModal(false)
    setInviteForm({ location: "", gameMode: "singles", partner: null, activeHours: 24 })
    setAvailability({
      selectedDays: [],
      selectedTimes: {},
      differentTimes: false,
      showDaySelection: false,
      showTimeSelection: false,
      primaryTime: "10:00",
    })
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

  const generateMockAvailability = () => {
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
    const times = ["08:00", "10:00", "14:00", "16:00", "18:00", "20:00"]

    return days.map((day) => ({
      day,
      available: Math.random() > 0.3, // 70% chance de estar disponível
      times: times.filter(() => Math.random() > 0.4), // Horários aleatórios disponíveis
    }))
  }

  const handleConsultAvailability = () => {
    setShowAvailabilityPreview(true)
  }

  const handlePartnerSelect = (partner) => {
    setInviteForm({ ...inviteForm, partner })
    setShowPartnerSelection(false)
    setPartnerSearchTerm("")
  }

  const daysOfWeek = [
    { id: "segunda", label: "Segunda-feira", short: "Seg" },
    { id: "terca", label: "Terça-feira", short: "Ter" },
    { id: "quarta", label: "Quarta-feira", short: "Qua" },
    { id: "quinta", label: "Quinta-feira", short: "Qui" },
    { id: "sexta", label: "Sexta-feira", short: "Sex" },
    { id: "sabado", label: "Sábado", short: "Sab" },
    { id: "domingo", label: "Domingo", short: "Dom" },
  ]

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]

  const getSelectedDaysText = () => {
    if (availability.selectedDays.length === 0) return "Selecionar dias"

    const shortNames = availability.selectedDays
      .map((dayId) => daysOfWeek.find((d) => d.id === dayId)?.short)
      .filter(Boolean)

    return shortNames.join(", ")
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "enviados":
        return (
          <div className="space-y-4">
            {invitesEnviados.map((invite, index) => (
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
                    <p className="text-sm text-white/70 mb-1">
                      ATN: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
                    </p>
                    <p className="text-sm text-white/70 mb-1">Data e hora: {invite.date}</p>
                    <p className="text-sm text-white/70 mb-1">Modo de jogo: {invite.gameMode}</p>
                    <p className="text-sm text-white/70">Local: {invite.local}</p>
                  </div>

                  <div className="flex flex-col gap-2 items-end">
                    <div className="bg-tl-verde text-white text-xs px-3 py-2 rounded-full text-center min-w-[180px]">
                      <div>Esse convite expira em</div>
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
        )

      case "recebidos":
        return (
          <div className="space-y-4">
            {invitesRecebidos.map((invite, index) => (
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
                    <p className="text-sm text-white/70 mb-1">
                      ATN: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
                    </p>
                    <p className="text-sm text-white/70 mb-1">Data e hora: {invite.date}</p>
                    <p className="text-sm text-white/70 mb-1">Modo de jogo: {invite.gameMode}</p>
                    <p className="text-sm text-white/70 mb-3">Local: {invite.local}</p>

                    <button
                      onClick={handleConsultAvailability}
                      className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors mb-3 w-full"
                    >
                      Consultar Disponibilidade
                    </button>

                    <div className="flex gap-2">
                      <button className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity flex-1">
                        Aceitar
                      </button>
                      <button className="btn bg-gray-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-gray-600 transition-colors flex-1">
                        Recusar
                      </button>
                    </div>

                    <div className="bg-yellow-500 text-black text-xs px-3 py-2 rounded-full text-center mt-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span>Esse convite expira em {invite.timeRemaining}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case "abertos":
        return (
          <div className="space-y-4">
            <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-4">
              <button
                onClick={() => setShowOpenInviteModal(true)}
                className="w-full bg-tl-verde/20 border border-tl-verde text-tl-verde py-3 rounded-full font-semibold hover:bg-tl-verde/30 transition-colors text-background bg-background"
              >
                Faça um convite aberto agora
              </button>
            </div>

            {invitesAbertos.map((invite, index) => (
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
                    <p className="text-sm text-white/70 mb-1">
                      ATN: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
                    </p>
                    <p className="text-sm text-white/70 mb-1">Data e hora: {invite.date}</p>
                    <p className="text-sm text-white/70 mb-1">Modo de jogo: {invite.gameMode}</p>
                    <p className="text-sm text-white/70 mb-3">Local: {invite.local}</p>

                    <button
                      onClick={handleConsultAvailability}
                      className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors mb-3 w-full"
                    >
                      Consultar Disponibilidade
                    </button>

                    <div className="flex gap-2">
                      <button className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity flex-1">
                        Aceitar
                      </button>
                      <button className="btn bg-gray-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-gray-600 transition-colors flex-1">
                        Recusar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case "recomendados":
        return (
          <div className="space-y-4">
            {invitesRecomendados.map((player) => (
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
                      ATN: {player.rating} Idade: {player.age} Ranking: {player.ranking}
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
                    <button className="btn bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors">
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 pb-20">
      {/* Seção Convites Enviados */}
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📤</span>
            </div>
            <h1 className="text-white text-xl font-extrabold">Convites Enviados</h1>
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
        {invitesEnviados.map((invite, index) => (
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
                <p className="text-sm text-white/70 mb-1">
                  ATN: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
                </p>
                <p className="text-sm text-white/70 mb-1">Data e hora: {invite.date}</p>
                <p className="text-sm text-white/70 mb-1">Modo de jogo: {invite.gameMode}</p>
                <p className="text-sm text-white/70">Local: {invite.local}</p>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="bg-tl-verde text-white text-xs px-3 py-2 rounded-full text-center min-w-[180px]">
                  <div>Esse convite expira em</div>
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

      {/* Seção Convites Recebidos */}
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📥</span>
            </div>
            <h1 className="text-white text-xl font-extrabold">Convites Recebidos</h1>
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
        {invitesRecebidos.map((invite, index) => (
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
                <p className="text-sm text-white/70 mb-1">
                  ATN: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
                </p>
                <p className="text-sm text-white/70 mb-1">Data e hora: {invite.date}</p>
                <p className="text-sm text-white/70">Modo de jogo: {invite.gameMode}</p>
                <p className="text-sm text-white/70">Local: {invite.local}</p>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="bg-tl-verde text-white text-xs px-3 py-2 rounded-full text-center min-w-[180px]">
                  <div>Esse convite expira em</div>
                  <div className="font-semibold">{invite.timeRemaining}</div>
                </div>
                <div className="flex gap-2">
                  <button className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors">
                    Aceitar
                  </button>
                  <button className="btn bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors">
                    Recusar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção Convites Abertos */}
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🔓</span>
            </div>
            <h1 className="text-white text-xl font-extrabold">Convites Abertos</h1>
          </div>
          <button className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShowOpenInviteModal(true)}
          className="w-full bg-tl-verde text-black font-bold py-4 px-6 rounded-2xl hover:bg-green-400 transition-colors text-lg"
        >
          Faça um convite aberto agora
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {invitesAbertos.map((invite, index) => (
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
                <p className="text-sm text-white/70 mb-1">
                  ATN: {invite.rating} | Idade: {invite.age} | Ranking: {invite.ranking}
                </p>
                <p className="text-sm text-white/70 mb-1">Data e hora: {invite.date}</p>
                <p className="text-sm text-white/70 mb-1">Modo de jogo: {invite.gameMode}</p>
                <p className="text-sm text-white/70">Local: {invite.local}</p>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <div className="bg-tl-verde text-white text-xs px-3 py-2 rounded-full text-center min-w-[180px]">
                  <div>Esse convite expira em</div>
                  <div className="font-semibold">{invite.timeRemaining}</div>
                </div>
                <button className="btn bg-tl-verde text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors">
                  Participar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção Convites Recomendados */}
      <div className="bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] rounded-3xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">⭐</span>
            </div>
            <h1 className="text-white text-xl font-extrabold">Convites Recomendados</h1>
          </div>
          <button className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
            <span className="text-sm font-medium">Filtros</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {invitesRecomendados.map((player) => (
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
                  ATN: {player.rating} Idade: {player.age} Ranking: {player.ranking}
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
                <button className="btn bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showInviteModal && selectedPlayer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Enviar Convite</h3>
              <button onClick={() => setShowInviteModal(false)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4 p-3 bg-white/5 rounded-lg">
              <p className="text-white font-semibold">{selectedPlayer.name}</p>
              <p className="text-white/70 text-sm">{selectedPlayer.location}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Disponibilidade</label>
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() =>
                        setAvailability({ ...availability, showDaySelection: !availability.showDaySelection })
                      }
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm text-left"
                    >
                      {getSelectedDaysText()}
                    </button>
                    <button
                      onClick={() =>
                        setAvailability({ ...availability, showTimeSelection: !availability.showTimeSelection })
                      }
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm text-left"
                    >
                      Às {availability.primaryTime}
                    </button>
                  </div>

                  {availability.selectedDays.length > 0 && (
                    <button
                      onClick={() =>
                        setAvailability({ ...availability, showTimeSelection: !availability.showTimeSelection })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm mb-3"
                    >
                      Selecionar mais horários
                    </button>
                  )}

                  <label className="flex items-center gap-2 text-white text-sm">
                    <input
                      type="checkbox"
                      checked={availability.differentTimes}
                      onChange={(e) => setAvailability({ ...availability, differentTimes: e.target.checked })}
                      className="w-4 h-4"
                    />
                    Horários diferentes
                  </label>

                  {availability.differentTimes && availability.selectedDays.length > 0 && (
                    <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-white text-sm font-medium mb-2">Horários selecionados:</div>
                      <div className="space-y-1">
                        {availability.selectedDays.map((dayId) => {
                          const day = daysOfWeek.find((d) => d.id === dayId)
                          const dayTimes = availability.selectedTimes[dayId] || []
                          return (
                            <div key={dayId} className="flex justify-between items-center text-sm">
                              <span className="text-white/80">{day?.label}:</span>
                              <span className="text-tl-verde">
                                {dayTimes.length > 0 ? dayTimes.join(", ") : "Nenhum horário"}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Seleção de dias */}
                  {availability.showDaySelection && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="space-y-2">
                        {daysOfWeek.map((day) => (
                          <label key={day.id} className="flex items-center justify-between text-white text-sm">
                            <span>{day.label}</span>
                            <input
                              type="checkbox"
                              checked={availability.selectedDays.includes(day.id)}
                              onChange={() => handleDayToggle(day.id)}
                              className="w-4 h-4"
                            />
                          </label>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => setAvailability({ ...availability, showDaySelection: false })}
                          className="flex-1 bg-white/10 text-white py-2 rounded-lg text-sm"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => setAvailability({ ...availability, showDaySelection: false })}
                          className="flex-1 bg-tl-verde text-white py-2 rounded-lg text-sm"
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Seleção de horários individuais por dia */}
                  {availability.showTimeSelection &&
                    availability.differentTimes &&
                    availability.selectedDays.length > 0 && (
                      <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 max-h-80 overflow-y-auto">
                        <div className="space-y-4">
                          {availability.selectedDays.map((dayId) => {
                            const day = daysOfWeek.find((d) => d.id === dayId)
                            const dayTimes = availability.selectedTimes[dayId] || []
                            return (
                              <div key={dayId} className="border-b border-white/10 pb-3 last:border-b-0">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-white text-sm font-medium">{day?.label}</span>
                                  <button
                                    onClick={() => addTimeToDay(dayId)}
                                    className="text-tl-verde text-xs hover:text-tl-verde/80"
                                  >
                                    + Adicionar horário
                                  </button>
                                </div>

                                {dayTimes.length === 0 ? (
                                  <div className="text-white/60 text-xs">Nenhum horário selecionado</div>
                                ) : (
                                  <div className="space-y-2">
                                    {dayTimes.map((time, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center justify-between bg-white/5 rounded px-2 py-1"
                                      >
                                        <select
                                          value={time}
                                          onChange={(e) => {
                                            const newTimes = [...dayTimes]
                                            newTimes[index] = e.target.value
                                            setAvailability({
                                              ...availability,
                                              selectedTimes: {
                                                ...availability.selectedTimes,
                                                [dayId]: newTimes.sort(),
                                              },
                                            })
                                          }}
                                          className="bg-transparent border-none text-white text-sm focus:outline-none"
                                        >
                                          {timeSlots.map((timeOption) => (
                                            <option key={timeOption} value={timeOption} className="bg-gray-800">
                                              {timeOption}
                                            </option>
                                          ))}
                                        </select>
                                        <button
                                          onClick={() => removeTimeFromDay(dayId, time)}
                                          className="text-red-400 hover:text-red-300 text-xs ml-2"
                                        >
                                          ✕
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="mt-2">
                                  <div className="grid grid-cols-4 gap-1">
                                    {timeSlots.map((time) => (
                                      <button
                                        key={time}
                                        onClick={() => handleTimeSelection(dayId, time)}
                                        className={`py-1 px-2 rounded text-xs transition-colors ${
                                          dayTimes.includes(time)
                                            ? "bg-tl-verde text-white"
                                            : "bg-white/10 text-white/70 hover:bg-white/20"
                                        }`}
                                      >
                                        {time}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                            className="flex-1 bg-white/10 text-white py-2 rounded-lg text-sm"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                            className="flex-1 bg-tl-verde text-white py-2 rounded-lg text-sm"
                          >
                            Confirmar
                          </button>
                        </div>
                      </div>
                    )}

                  {/* Seleção de horário único */}
                  {availability.showTimeSelection && !availability.differentTimes && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setAvailability({ ...availability, primaryTime: time })}
                            className={`py-2 px-3 rounded text-sm transition-colors ${
                              availability.primaryTime === time
                                ? "bg-tl-verde text-white"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                          className="flex-1 bg-white/10 text-white py-2 rounded-lg text-sm"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                          className="flex-1 bg-tl-verde text-white py-2 rounded-lg text-sm"
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Local</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ex: Quadra do Clube ABC"
                    value={inviteForm.location}
                    onChange={(e) => setInviteForm({ ...inviteForm, location: e.target.value })}
                    onClick={() => setShowLocationSearch(true)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-10 text-white text-sm"
                    readOnly
                  />
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-tl-verde"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Modo de Jogo</label>
                <select
                  value={inviteForm.gameMode}
                  onChange={(e) => setInviteForm({ ...inviteForm, gameMode: e.target.value })}
                  className="w-full border border-white/20 rounded-lg px-3 py-2 text-white text-sm bg-card-foreground"
                >
                  <option value="singles">Simples</option>
                  <option value="doubles">Duplas</option>
                </select>
              </div>

              {inviteForm.gameMode === "doubles" && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Selecionar Parceiro</label>
                  <button
                    onClick={() => setShowPartnerSelection(true)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-left text-white text-sm hover:bg-white/20 transition-colors"
                  >
                    {inviteForm.partner ? inviteForm.partner.name : "Selecione um parceiro"}
                  </button>
                </div>
              )}

              <div>
                <label className="block text-white text-sm font-medium mb-2">Convite ativo por (horas)</label>
                <select
                  value={inviteForm.activeHours}
                  onChange={(e) => setInviteForm({ ...inviteForm, activeHours: Number.parseInt(e.target.value) })}
                  className="w-full border border-white/20 rounded-lg px-3 py-2 text-white text-sm bg-card-foreground"
                >
                  <option value={12}>12 horas</option>
                  <option value={18}>18 horas</option>
                  <option value={24}>24 horas</option>
                  <option value={36}>36 horas</option>
                  <option value={48}>48 horas</option>
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

      {showOpenInviteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Enviar Convite</h3>
              <button onClick={() => setShowOpenInviteModal(false)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Disponibilidade</label>
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() =>
                        setAvailability({ ...availability, showDaySelection: !availability.showDaySelection })
                      }
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm text-left"
                    >
                      {getSelectedDaysText()}
                    </button>
                    <button
                      onClick={() =>
                        setAvailability({ ...availability, showTimeSelection: !availability.showTimeSelection })
                      }
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm text-left"
                    >
                      Às {availability.primaryTime}
                    </button>
                  </div>

                  {availability.selectedDays.length > 0 && (
                    <button
                      onClick={() =>
                        setAvailability({ ...availability, showTimeSelection: !availability.showTimeSelection })
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm mb-3"
                    >
                      Selecionar mais horários
                    </button>
                  )}

                  <label className="flex items-center gap-2 text-white text-sm">
                    <input
                      type="checkbox"
                      checked={availability.differentTimes}
                      onChange={(e) => setAvailability({ ...availability, differentTimes: e.target.checked })}
                      className="w-4 h-4"
                    />
                    Horários diferentes
                  </label>

                  {availability.differentTimes && availability.selectedDays.length > 0 && (
                    <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-white text-sm font-medium mb-2">Horários selecionados:</div>
                      <div className="space-y-1">
                        {availability.selectedDays.map((dayId) => {
                          const day = daysOfWeek.find((d) => d.id === dayId)
                          const dayTimes = availability.selectedTimes[dayId] || []
                          return (
                            <div key={dayId} className="flex justify-between items-center text-sm">
                              <span className="text-white/80">{day?.label}:</span>
                              <span className="text-tl-verde">
                                {dayTimes.length > 0 ? dayTimes.join(", ") : "Nenhum horário"}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Seleção de dias */}
                  {availability.showDaySelection && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="space-y-2">
                        {daysOfWeek.map((day) => (
                          <label key={day.id} className="flex items-center justify-between text-white text-sm">
                            <span>{day.label}</span>
                            <input
                              type="checkbox"
                              checked={availability.selectedDays.includes(day.id)}
                              onChange={() => handleDayToggle(day.id)}
                              className="w-4 h-4"
                            />
                          </label>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => setAvailability({ ...availability, showDaySelection: false })}
                          className="flex-1 bg-white/10 text-white py-2 rounded-lg text-sm"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => setAvailability({ ...availability, showDaySelection: false })}
                          className="flex-1 bg-tl-verde text-white py-2 rounded-lg text-sm"
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Seleção de horários individuais por dia */}
                  {availability.showTimeSelection &&
                    availability.differentTimes &&
                    availability.selectedDays.length > 0 && (
                      <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 max-h-60 overflow-y-auto">
                        <div className="space-y-4">
                          {availability.selectedDays.map((dayId) => {
                            const day = daysOfWeek.find((d) => d.id === dayId)
                            const dayTimes = availability.selectedTimes[dayId] || []
                            return (
                              <div key={dayId} className="border-b border-white/10 pb-3 last:border-b-0">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-white text-sm font-medium">{day?.label}</span>
                                  <button
                                    onClick={() => addTimeToDay(dayId)}
                                    className="text-tl-verde text-xs hover:text-tl-verde/80"
                                  >
                                    + Adicionar horário
                                  </button>
                                </div>

                                {dayTimes.length === 0 ? (
                                  <div className="text-white/60 text-xs">Nenhum horário selecionado</div>
                                ) : (
                                  <div className="space-y-2">
                                    {dayTimes.map((time, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center justify-between bg-white/5 rounded px-2 py-1"
                                      >
                                        <select
                                          value={time}
                                          onChange={(e) => {
                                            const newTimes = [...dayTimes]
                                            newTimes[index] = e.target.value
                                            setAvailability({
                                              ...availability,
                                              selectedTimes: {
                                                ...availability.selectedTimes,
                                                [dayId]: newTimes.sort(),
                                              },
                                            })
                                          }}
                                          className="bg-transparent border-none text-white text-sm focus:outline-none"
                                        >
                                          {timeSlots.map((timeOption) => (
                                            <option key={timeOption} value={timeOption} className="bg-gray-800">
                                              {timeOption}
                                            </option>
                                          ))}
                                        </select>
                                        <button
                                          onClick={() => removeTimeFromDay(dayId, time)}
                                          className="text-red-400 hover:text-red-300 text-xs ml-2"
                                        >
                                          ✕
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="mt-2">
                                  <div className="grid grid-cols-4 gap-1">
                                    {timeSlots.map((time) => (
                                      <button
                                        key={time}
                                        onClick={() => handleTimeSelection(dayId, time)}
                                        className={`py-1 px-2 rounded text-xs transition-colors ${
                                          dayTimes.includes(time)
                                            ? "bg-tl-verde text-white"
                                            : "bg-white/10 text-white/70 hover:bg-white/20"
                                        }`}
                                      >
                                        {time}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                            className="flex-1 bg-white/10 text-white py-2 rounded-lg text-sm"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                            className="flex-1 bg-tl-verde text-white py-2 rounded-lg text-sm"
                          >
                            Confirmar
                          </button>
                        </div>
                      </div>
                    )}

                  {/* Seleção de horário único */}
                  {availability.showTimeSelection && !availability.differentTimes && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setAvailability({ ...availability, primaryTime: time })}
                            className={`py-2 px-3 rounded text-sm transition-colors ${
                              availability.primaryTime === time
                                ? "bg-tl-verde text-white"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                          className="flex-1 bg-white/10 text-white py-2 rounded-lg text-sm"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => setAvailability({ ...availability, showTimeSelection: false })}
                          className="flex-1 bg-tl-verde text-white py-2 rounded-lg text-sm"
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Local</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ex: Quadra do Clube ABC"
                    value={inviteForm.location}
                    onChange={(e) => setInviteForm({ ...inviteForm, location: e.target.value })}
                    onClick={() => setShowLocationSearch(true)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-10 text-white text-sm"
                    readOnly
                  />
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-tl-verde"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Modo de Jogo</label>
                <select
                  value={inviteForm.gameMode}
                  onChange={(e) => setInviteForm({ ...inviteForm, gameMode: e.target.value })}
                  className="w-full border border-white/20 rounded-lg px-3 py-2 text-white text-sm bg-card-foreground"
                >
                  <option value="singles">Simples</option>
                  <option value="doubles">Duplas</option>
                </select>
              </div>

              {inviteForm.gameMode === "doubles" && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Selecionar Parceiro</label>
                  <button
                    onClick={() => setShowPartnerSelection(true)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-left text-white text-sm hover:bg-white/20 transition-colors"
                  >
                    {inviteForm.partner ? inviteForm.partner.name : "Selecione um parceiro"}
                  </button>
                </div>
              )}

              <div>
                <label className="block text-white text-sm font-medium mb-2">Convite ativo por (horas)</label>
                <select
                  value={inviteForm.activeHours}
                  onChange={(e) => setInviteForm({ ...inviteForm, activeHours: Number.parseInt(e.target.value) })}
                  className="w-full border border-white/20 rounded-lg px-3 py-2 text-white text-sm bg-card-foreground"
                >
                  <option value={12}>12 horas</option>
                  <option value={18}>18 horas</option>
                  <option value={24}>24 horas</option>
                  <option value={36}>36 horas</option>
                  <option value={48}>48 horas</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowOpenInviteModal(false)}
                className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSendOpenInvite}
                className="flex-1 bg-tl-verde text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Enviar Convite
              </button>
            </div>
          </div>
        </div>
      )}

      {availability.differentTimes && availability.selectedDays.length > 0 && (
        <div className="mt-4 p-3 bg-tl-verde/10 border border-tl-verde/20 rounded-lg">
          <h4 className="text-tl-verde text-sm font-medium mb-2">Horários Selecionados:</h4>
          <div className="space-y-1">
            {availability.selectedDays.map((dayId) => {
              const day = daysOfWeek.find((d) => d.id === dayId)
              const dayTimes = availability.selectedTimes[dayId] || []
              return (
                <div key={dayId} className="text-white text-xs">
                  <span className="font-medium">{day?.label}:</span>{" "}
                  {dayTimes.length > 0 ? dayTimes.join(", ") : "Nenhum horário"}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {showPartnerSelection && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#101a2b] rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Enviar Convite</h3>
              <button
                onClick={() => {
                  setShowPartnerSelection(false)
                  setPartnerSearchTerm("")
                }}
                className="text-white/60 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Campo de busca de parceiro */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar Parceiro"
                  value={partnerSearchTerm}
                  onChange={(e) => setPartnerSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-10 text-white text-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60"
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
            </div>

            {/* Parceiros Sugeridos */}
            <div className="mb-4">
              <h4 className="text-white/70 text-sm font-medium mb-3">Parceiros Sugeridos</h4>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {filteredPartners.map((partner) => (
                  <button
                    key={partner.id}
                    onClick={() => handlePartnerSelect(partner)}
                    className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-white text-sm">{partner.name}</h5>
                        <p className="text-xs text-white/70 mb-1">{partner.location}</p>
                        <p className="text-xs text-white/70">
                          ATN: {partner.rating} | Idade: {partner.age} | Ranking: {partner.ranking}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Convite ativo por */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">Convite ativo por (horas)</label>
              <select
                value={inviteForm.activeHours}
                onChange={(e) => setInviteForm({ ...inviteForm, activeHours: Number.parseInt(e.target.value) })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value={12}>12 horas</option>
                <option value={18}>18 horas</option>
                <option value={24}>24 horas</option>
                <option value={36}>36 horas</option>
                <option value={48}>48 horas</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPartnerSelection(false)
                  setPartnerSearchTerm("")
                }}
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
