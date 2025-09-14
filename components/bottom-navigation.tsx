"use client"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    {
      id: "inicio",
      label: "Início",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 3L3 9v12h6v-7h6v7h6V9" />
        </svg>
      ),
    },
    {
      id: "ranking",
      label: "Ranking",
      icon: <img src="/images/ranking-icon.png" alt="Ranking" className="w-5 h-5" />,
    },
    {
      id: "jogos-marcados",
      label: "Jogos",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7 3V1h2v2h6V1h2v2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M3 9v10h18V9H3m4 2v2H5v-2h2m0 4v2H5v-2h2m4-4v2H9v-2h2m0 4v2H9v-2h2m4-4v2h-2v-2h2m0 4v2h-2v-2h2m4-4v2h-2v-2h2"
          />
        </svg>
      ),
    },
    {
      id: "convidar",
      label: "Convidar",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V8l8 5l8-5z"
          />
        </svg>
      ),
    },
    {
      id: "perfil",
      label: "Perfil",
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
        </svg>
      ),
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 border-t border-white/10 bg-[linear-gradient(90deg,rgba(0,99,166,.25),rgba(0,169,224,.25),rgba(0,200,187,.25))] backdrop-blur-md safe-area-inset-bottom">
      <div className="h-full grid grid-cols-5 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
                isActive ? "text-white" : "text-white/70"
              }`}
            >
              {tab.icon}
              <span className="leading-none">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
