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
    { opponent: "Davi Campos Ranieri", score: ["6", "4", "10"], date: "15/12/2024" },
    { opponent: "Marina Silva", score: ["4", "6", "8"], date: "12/12/2024" },
    { opponent: "João Santos", score: ["7", "5", "12"], date: "10/12/2024" },
  ]

  const events = [
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

  const handleContactSupport = () => {
    // Simula abertura de chat de suporte ou redirecionamento
    alert("Redirecionando para o suporte do Tennis Link...")
  }

  const handleShareProfile = () => {
    // Simula compartilhamento do perfil
    if (navigator.share) {
      navigator.share({
        title: "Meu perfil no Tennis Link",
        text: "Confira meu perfil no Tennis Link!",
        url: window.location.href,
      })
    } else {
      // Fallback para copiar link
      navigator.clipboard.writeText(window.location.href)
      alert("Link do perfil copiado para a área de transferência!")
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "visao-geral":
        return (
          <div className="space-y-6">
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

            <div className="space-y-6">
              <h3 className="text-lg font-bold">Atividades Recentes</h3>
              <div className="space-y-3">
                {recentMatches.map((match, index) => (
                  <div key={index} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-base">{match.opponent}</div>
                        <div className="text-sm text-white/60">{match.date}</div>
                      </div>
                      <div className="flex gap-1">
                        {match.score.map((score, i) => (
                          <div
                            key={i}
                            className="w-8 h-6 border border-tl-verde rounded flex items-center justify-center text-sm font-medium"
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

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Próximos Eventos</h3>
                <button className="text-tl-verde text-sm hover:underline">Ver todos ›</button>
              </div>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="glass rounded-xl p-4 space-y-2">
                    <div className="text-sm text-white/60">{event.date}</div>
                    <h4 className="font-bold text-base">{event.title}</h4>
                    <p className="text-sm text-white/70">{event.location}</p>
                    <div className="border-t border-[#F1C40F] pt-2">
                      <p className="text-sm text-white/70">{event.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Ações do Perfil</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleContactSupport}
                  className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/5 transition-colors"
                >
                  <svg className="w-6 h-6 text-tl-ciano" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Suporte</span>
                </button>
                <button
                  onClick={handleShareProfile}
                  className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/5 transition-colors"
                >
                  <svg className="w-6 h-6 text-tl-verde" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Compartilhar</span>
                </button>
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
                    {match.score.map((score, i) => (
                      <div
                        key={i}
                        className="w-8 h-6 border border-tl-verde rounded flex items-center justify-center text-sm font-medium"
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
          <div className="space-y-6">
            <div className="text-lg font-bold">Estatísticas Detalhadas</div>

            <div className="card p-4">
              <h4 className="font-bold mb-4 text-center">Desempenho Geral</h4>
              <div className="flex justify-center mb-4">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#winGradient)"
                      strokeWidth="8"
                      strokeDasharray="150.8 100.5"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="winGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--tl-verde)" />
                        <stop offset="50%" stopColor="var(--tl-ciano)" />
                        <stop offset="100%" stopColor="var(--tl-azul)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-tl-verde">60%</div>
                    <div className="text-sm text-white/70">Taxa de Vitória</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-tl-verde">24</div>
                  <div className="text-sm text-white/70">Vitórias</div>
                </div>
                <div className="glass rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-red-400">16</div>
                  <div className="text-sm text-white/70">Derrotas</div>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <h4 className="font-bold mb-4">Evolução ATN</h4>
              <div className="h-32 flex items-end justify-between gap-2 mb-4">
                {[
                  { year: "2020", value: 20, color: "bg-gradient-to-t from-tl-azul to-tl-ciano" },
                  { year: "2021", value: 100, color: "bg-gradient-to-t from-tl-ciano to-tl-verde" },
                  { year: "2022", value: 80, color: "bg-gradient-to-t from-tl-verde to-tl-ciano" },
                  { year: "2023", value: 90, color: "bg-gradient-to-t from-tl-ciano to-tl-azul" },
                  { year: "2024", value: 150, color: "bg-gradient-to-t from-tl-azul to-tl-verde" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-full ${item.color} rounded-t-lg transition-all duration-1000 hover:scale-105`}
                      style={{ height: `${(item.value / 200) * 100}%` }}
                    ></div>
                    <div className="text-xs mt-2 font-medium">{item.year}</div>
                    <div className="text-xs text-tl-ciano">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-4">
              <h4 className="font-bold mb-4">Estatísticas Completas</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Total de jogos</span>
                    <span className="text-lg font-bold text-tl-verde">40</span>
                  </div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Win Rate</span>
                    <span className="text-lg font-bold text-tl-ciano">60%</span>
                  </div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Games jogados</span>
                    <span className="text-lg font-bold text-white">248</span>
                  </div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Saldo de games</span>
                    <span className="text-lg font-bold text-tl-verde">+32</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <h4 className="font-bold mb-4">Ranking por Categoria</h4>
              <div className="space-y-3">
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Cidade</div>
                      <div className="text-sm text-white/70">São José dos Campos</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-tl-verde">#12</div>
                      <div className="text-xs text-white/70">de 450</div>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Estado</div>
                      <div className="text-sm text-white/70">São Paulo</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-tl-ciano">#89</div>
                      <div className="text-xs text-white/70">de 2.1k</div>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-xl p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Nacional</div>
                      <div className="text-sm text-white/70">Brasil</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">#1.2k</div>
                      <div className="text-xs text-white/70">de 15k</div>
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
                  <div className="text-sm font-semibold flex items-center gap-1">
                    ATN
                    <svg className="w-4 h-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-extrabold">XX.XX</div>
                </div>
                <div>
                  <div className="text-sm font-semibold flex items-center gap-1">
                    ATN
                     <svg className="w-4 h-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg><svg className="h-4 text-blue-400 w-4 mx-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
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
