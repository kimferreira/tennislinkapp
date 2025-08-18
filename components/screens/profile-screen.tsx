"use client"

import type React from "react"

import { useState } from "react"

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("visao-geral")
  const [showPublishModal, setShowPublishModal] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [publishForm, setPublishForm] = useState({
    opponent: "",
    score: "",
    photos: [] as File[],
    description: "",
  })

  const tabs = [
    { id: "visao-geral", label: "Visão Geral" },
    { id: "resultados", label: "Resultados" },
    { id: "estatisticas", label: "Estatísticas" },
    { id: "eventos", label: "Eventos" },
  ]

  const matchedOpponents = [
    { id: 1, name: "Davi Campos Ranieri", atn: "12.5" },
    { id: 2, name: "Tullius Silva", atn: "11.8" },
    { id: 3, name: "Marina Costa", atn: "13.2" },
    { id: 4, name: "João Santos", atn: "10.9" },
  ]

  const recentMatches = [
    { opponent: "Davi Campos Ranieri", score: "6 4 10", date: "__/__/____" },
    { opponent: "Davi Campos Ranieri", score: "4 6 8", date: "__/__/____" },
  ]

  const events = [
    {
      title: "ETAPA 24 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
      location: "São José dos Campos, São Paulo, Brasil",
      details: "R$ 3.0k Premiação • 30 Jogadores • ATN 1.0 - 100.00 • Simples/duplas • Saibro",
      date: "__/__/____",
    },
    {
      title: "ETAPA 24 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
      location: "São José dos Campos, São Paulo, Brasil",
      details: "R$ 3.0k Premiação • 30 Jogadores • ATN 1.0 - 100.00 • Simples/duplas • Saibro",
      date: "__/__/____",
    },
  ]

  const plans = [
    { id: "bronze", name: "Bronze", color: "text-orange-600", diamonds: 1, price: "R$ 19,90/mês" },
    { id: "prata", name: "Prata", color: "text-gray-400", diamonds: 2, price: "R$ 39,90/mês" },
    { id: "ouro", name: "Ouro", color: "text-yellow-500", diamonds: 3, price: "R$ 59,90/mês" },
    { id: "diamante", name: "Diamante", color: "text-blue-400", diamonds: 4, price: "R$ 99,90/mês" },
  ]

  const currentPlan = "gratis" // Plano atual do usuário

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setPublishForm((prev) => ({ ...prev, photos: [...prev.photos, ...files] }))
  }

  const handlePublishResult = () => {
    if (!publishForm.opponent || !publishForm.score) {
      alert("Por favor, selecione um oponente e insira o placar.")
      return
    }

    // Aqui seria feita a integração com a API
    console.log("Publicando resultado:", publishForm)

    // Reset form and close modal
    setPublishForm({ opponent: "", score: "", photos: [], description: "" })
    setShowPublishModal(false)
    alert("Resultado publicado com sucesso!")
  }

  const handleUpgrade = () => {
    if (!selectedPlan) {
      alert("Por favor, selecione um plano.")
      return
    }

    console.log("Fazendo upgrade para:", selectedPlan)
    setShowUpgradeModal(false)
    setSelectedPlan("")
    alert("Upgrade realizado com sucesso!")
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "visao-geral":
        return (
          <div className="space-y-4">
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setShowPublishModal(true)}
                className="btn bg-tl-verde text-black px-3 py-2 rounded-full font-semibold flex items-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                Publicar Resultado
              </button>
            </div>

            <div className="card p-3">
              <h3 className="font-bold text-base mb-3">Meu desempenho:</h3>
              <div className="space-y-3">
                <div className="glass rounded-xl p-3">
                  <div className="text-sm text-white/60 mb-2">Ranking:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span>Cidade:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estado:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>País:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mundo:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span>Total de jogos:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vitórias/Derrotas:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Games jogados:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saldo de games:</span>
                      <span className="text-tl-verde">xxxxx</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "resultados":
        return (
          <div className="space-y-3">
            <div className="flex justify-end">
              <button className="text-white flex items-center gap-2">
                <span className="text-xs font-medium">Filtros</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                  <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
                </svg>
              </button>
            </div>
            <div className="text-xs text-white/70 mb-3">Meus Jogos:</div>
            {recentMatches.map((match, index) => (
              <div key={index} className="card p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-white/60">{match.date}</div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">🇧🇷</span>
                      <span className="text-xs font-medium">{match.opponent}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {match.score.split(" ").map((score, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 border border-tl-verde rounded flex items-center justify-center text-xs"
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>🇧🇷 {match.opponent}</span>
                    <div className="flex gap-1">
                      <span className="text-white/40">4</span>
                      <span className="text-white/40">6</span>
                      <span className="text-white/40">8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      case "estatisticas":
        return (
          <div className="space-y-4">
            <div className="text-base font-bold">Estatísticas:</div>
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="var(--tl-ciano)"
                    strokeWidth="6"
                    strokeDasharray="130 90"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-lg font-bold">Vitórias/</div>
                  <div className="text-lg font-bold">derrotas</div>
                </div>
                <div className="absolute top-2 right-4 text-xs">
                  <div>Vitórias</div>
                  <div>60%</div>
                </div>
                <div className="absolute bottom-2 left-4 text-xs">
                  <div>Derrotas</div>
                  <div>40%</div>
                </div>
              </div>
            </div>
            <div className="card p-3">
              <h4 className="font-bold mb-3 text-sm">ATN/ tempo</h4>
              <div className="h-24 flex items-end justify-between">
                {[20, 100, 80, 90, 150].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-3 bg-tl-ciano rounded-t" style={{ height: `${(height / 200) * 100}%` }}></div>
                    <div className="text-xs mt-1">{2023 + index}</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-xs mt-2">Tempo</div>
            </div>
          </div>
        )
      case "eventos":
        return (
          <div className="space-y-3">
            <div className="text-xs text-white/70 mb-3">Eventos recentes:</div>
            {events.map((event, index) => (
              <div key={index} className="card p-3">
                <div className="text-xs text-white/60 mb-1">{event.date}</div>
                <h4 className="font-bold text-sm mb-1">{event.title}</h4>
                <p className="text-xs text-white/70 mb-2">{event.location}</p>
                <div className="border-t border-[#F1C40F] pt-2">
                  <p className="text-xs text-white/70">{event.details}</p>
                </div>
              </div>
            ))}
            <div className="text-center">
              <button className="text-tl-verde text-xs hover:underline">ver mais</button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="relative pb-20">
      <div className="h-32 bg-[conic-gradient(at_top_left,var(--tl-azul),var(--tl-ciano),var(--tl-verde))]"></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="-mt-10 card p-4 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src="/images/tennis-link-logo.png" alt="Tennis Link" className="h-16 w-auto" />
              <div className="relative">
                
                
                
              </div>
            </div>

            <div className="flex-1 mx-4">
              <div className="relative">
                <input
                  placeholder="Procurar Adversário"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-2 pr-10 text-sm outline-none text-tl placeholder-white/50"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4"
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

            <button className="btn btn-outline">Editar perfil</button>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center ring-4 ring-black/20 flex-shrink-0">
              <svg className="w-10 h-10 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-extrabold truncate">Nome: xxxxx xxxxxxxx xxxxx</h1>
              <p className="text-white/70 text-sm">São José dos Campos, São Paulo, Brasil</p>
              <p className="text-white/70 text-sm">Idade: xx • Ranking: xxxx • Sexo: xxxxxxxxx</p>
              <div className="flex gap-4 mt-2">
                <div>
                  <div className="text-sm font-semibold">ATN ♂</div>
                  <div className="text-2xl font-extrabold">XX.XX</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">ATN ♂♂</div>
                  <div className="text-2xl font-extrabold">XX.XX</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 p-3 glass rounded-xl">
            <div>
              <div className="text-sm font-semibold">Meu Plano</div>
              <div className="text-xs text-white/60">Grátis</div>
              <div className="flex gap-1 mt-1">
                <span className="text-white/30">♦</span>
                <span className="text-white/30">♦</span>
                <span className="text-white/30">♦</span>
                <span className="text-white/30">♦</span>
              </div>
            </div>
            <button
              onClick={() => setShowUpgradeModal(true)}
              className="btn bg-[#F1C40F] text-black text-sm px-4 py-2 rounded-full font-semibold"
            >
              Fazer Upgrade
            </button>
          </div>

          <div className="flex items-center justify-between py-4 border-t border-white/10 border-b text-sm">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="currentColor"
                  d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"
                />
              </svg>
              <span>Compartilhar perfil</span>
            </div>
            <span className="text-tl-ciano">Fale conosco</span>
          </div>

          <div className="py-8 text-center border-b border-white/10">
            <h3 className="text-2xl font-bold">Anuncio</h3>
          </div>

          <div className="border-b border-white/10 flex gap-6 text-sm mt-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 whitespace-nowrap ${activeTab === tab.id ? "tab-active" : "text-white/60"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6">{renderTabContent()}</div>
        </div>
      </div>

      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-sm w-full p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Escolher Plano</h3>
              <button onClick={() => setShowUpgradeModal(false)} className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? "border-tl-verde bg-tl-verde/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-semibold ${plan.color}`}>{plan.name}</div>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: 4 }, (_, i) => (
                          <span key={i} className={i < plan.diamonds ? plan.color : "text-white/30"}>
                            ♦
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{plan.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <button onClick={() => setShowUpgradeModal(false)} className="flex-1 btn btn-outline text-sm">
                Cancelar
              </button>
              <button onClick={handleUpgrade} className="flex-1 btn bg-tl-verde text-black font-semibold text-sm">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {showPublishModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Publicar Resultado</h3>
              <button onClick={() => setShowPublishModal(false)} className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Oponente *</label>
                <select
                  value={publishForm.opponent}
                  onChange={(e) => setPublishForm((prev) => ({ ...prev, opponent: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
                >
                  <option value="">Selecione um oponente que você enfrentou</option>
                  {matchedOpponents.map((opponent) => (
                    <option key={opponent.id} value={opponent.name} className="bg-gray-800">
                      {opponent.name} (ATN {opponent.atn})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-white/60 mt-1">Apenas oponentes com matching confirmado no app</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Placar *</label>
                <input
                  type="text"
                  placeholder="Ex: 6-4, 7-5 ou 6-3, 4-6, 6-2"
                  value={publishForm.score}
                  onChange={(e) => setPublishForm((prev) => ({ ...prev, score: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Fotos do jogo</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
                />
                {publishForm.photos.length > 0 && (
                  <p className="text-xs text-tl-verde mt-1">{publishForm.photos.length} foto(s) selecionada(s)</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <textarea
                  placeholder="Conte como foi o jogo..."
                  value={publishForm.description}
                  onChange={(e) => setPublishForm((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none h-20 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowPublishModal(false)} className="flex-1 btn btn-outline">
                  Cancelar
                </button>
                <button onClick={handlePublishResult} className="flex-1 btn bg-tl-verde text-black font-semibold">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
