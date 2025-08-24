"use client"
import { useState } from "react"

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("visao-geral")
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const tabs = [
    { id: "visao-geral", label: "Visão Geral" },
    { id: "resultados", label: "Resultados" },
    { id: "estatisticas", label: "Estatísticas" },
    { id: "eventos", label: "Eventos" },
  ]

  const recentMatches = [
    { opponent: "Davi Campos Ranieri", score: "6 4 10", date: "15/12/2024" },
    { opponent: "Davi Campos Ranieri", score: "4 6 8", date: "12/12/2024" },
  ]

  const events = [
    {
      title: "ETAPA 24 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
      location: "São José dos Campos, São Paulo, Brasil",
      details: "R$ 3.0k Premiação • 30 Jogadores • ATN 1.0 - 100.00 • Simples/duplas • Saibro",
      date: "20/01/2025",
    },
    {
      title: "ETAPA 24 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
      location: "São José dos Campos, São Paulo, Brasil",
      details: "R$ 3.0k Premiação • 30 Jogadores • ATN 1.0 - 100.00 • Simples/duplas • Saibro",
      date: "25/01/2025",
    },
  ]

  const plans = [
    { id: "bronze", name: "Bronze", color: "text-orange-600", diamonds: 1, price: "R$ 19,90/mês" },
    { id: "prata", name: "Prata", color: "text-gray-400", diamonds: 2, price: "R$ 39,90/mês" },
    { id: "ouro", name: "Ouro", color: "text-yellow-500", diamonds: 3, price: "R$ 59,90/mês" },
    { id: "diamante", name: "Diamante", color: "text-blue-400", diamonds: 4, price: "R$ 99,90/mês" },
  ]

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
            <div className="card p-3">
              <h3 className="font-bold text-base mb-3">Estatísticas Principais:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="glass rounded-xl p-3">
                  <div className="text-white/60 mb-1">Vitórias</div>
                  <div className="text-xl font-bold text-tl-verde">24</div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="text-white/60 mb-1">Derrotas</div>
                  <div className="text-xl font-bold text-red-400">16</div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="text-white/60 mb-1">Win Rate</div>
                  <div className="text-xl font-bold text-tl-ciano">60%</div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="text-white/60 mb-1">Jogos este mês</div>
                  <div className="text-xl font-bold text-white">8</div>
                </div>
              </div>
            </div>

            <div className="card p-3">
              <h3 className="font-bold text-base mb-3">Resultados Recentes:</h3>
              <div className="space-y-2">
                {recentMatches.slice(0, 3).map((match, index) => (
                  <div key={index} className="glass rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">{match.opponent}</div>
                        <div className="text-xs text-white/60">{match.date}</div>
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
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-3">
              <h3 className="font-bold text-base mb-3">Eventos Recentes:</h3>
              <div className="space-y-2">
                {events.slice(0, 2).map((event, index) => (
                  <div key={index} className="glass rounded-xl p-3">
                    <div className="text-xs text-white/60 mb-1">{event.date}</div>
                    <h4 className="font-semibold text-sm mb-1">{event.title.substring(0, 40)}...</h4>
                    <p className="text-xs text-white/70">{event.location}</p>
                  </div>
                ))}
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
                  <div className="text-xs text-white/60">{match.date}</div>
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
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇧🇷</span>
                  <span className="text-xs font-medium">{match.opponent}</span>
                </div>
                <div className="border-t border-white/10 pt-2 mt-2">
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

            {/* Gráfico de vitórias/derrotas */}
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

            {/* Gráfico ATN/tempo */}
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

            {/* Estatísticas detalhadas */}
            <div className="card p-3">
              <h4 className="font-bold mb-3 text-sm">Estatísticas Detalhadas</h4>
              <div className="space-y-3">
                <div className="glass rounded-xl p-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span>Total de jogos:</span>
                      <span className="text-tl-verde">40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vitórias/Derrotas:</span>
                      <span className="text-tl-verde">24/16</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Games jogados:</span>
                      <span className="text-tl-verde">248</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saldo de games:</span>
                      <span className="text-tl-verde">+32</span>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="text-sm font-semibold">ATN 👤</div>
                  <div className="text-2xl font-extrabold">XX.XX</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">ATN 👥</div>
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
    </section>
  )
}
