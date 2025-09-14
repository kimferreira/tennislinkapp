"use client"

import { useState } from "react"
import BottomNavigation from "@/components/bottom-navigation"
import ExploreScreen from "@/components/screens/explore-screen"
import ChallengesScreen from "@/components/screens/challenges-screen"
import RankingScreen from "@/components/screens/ranking-screen"
import InvitesScreen from "@/components/screens/invites-screen"
import ProfileScreen from "@/components/screens/profile-screen"
import JogosMarcadosScreen from "@/components/screens/jogos-marcados-screen"
import { X, Calendar, MapPin, Clock } from "lucide-react"

export default function MainApp() {
  const [activeTab, setActiveTab] = useState("inicio")
  const [showReminderPopup, setShowReminderPopup] = useState(false)

  const acceptedInvites = [
    {
      opponent: "Carlos Silva",
      date: "15/12/2024",
      time: "14:30",
      location: "Quadra Central",
    },
    {
      opponent: "Ana Paula",
      date: "16/12/2024",
      time: "16:00",
      location: "Clube ABC",
    },
  ]

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)

    if ((tab === "jogos-marcados" || tab === "convidar") && acceptedInvites.length > 0) {
      const timer = setTimeout(() => {
        setShowReminderPopup(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "inicio":
        return <ExploreScreen />
      case "desafios":
        return <ChallengesScreen />
      case "ranking":
        return <RankingScreen />
      case "jogos-marcados":
        return <JogosMarcadosScreen />
      case "convidar":
        return <InvitesScreen />
      case "perfil":
        return <ProfileScreen />
      default:
        return <ExploreScreen />
    }
  }

  return (
    <div className="min-h-screen bg-tl-escuro text-tl">
      <div className="max-w-[1200px] mx-auto">
        <div className="safe">{renderScreen()}</div>
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {showReminderPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-tl-card rounded-2xl p-4 sm:p-6 max-w-sm w-full mx-2 sm:mx-4 shadow-soft border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-tl-verde to-tl-ciano rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-tl">Lembrete</h3>
              </div>
              <button
                onClick={() => setShowReminderPopup(false)}
                className="text-gray-400 hover:text-tl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm sm:text-base text-tl mb-3 text-balance">
                Olá <span className="font-semibold text-tl-verde">Marina</span>! Você possui alguns convites aceitos,
                atente-se à data e local para não perder seu jogo.
              </p>

              <div className="space-y-2 sm:space-y-3">
                {acceptedInvites.slice(0, 2).map((invite, index) => (
                  <div key={index} className="bg-tl-escuro/50 rounded-lg p-2.5 sm:p-3 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm sm:text-base text-tl">{invite.opponent}</span>
                      <span className="text-xs sm:text-sm text-tl-verde font-medium">Confirmado</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{invite.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{invite.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{invite.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => setShowReminderPopup(false)}
                className="w-full sm:flex-1 py-2.5 px-4 bg-gray-600/20 text-gray-300 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-600/30 transition-colors"
              >
                Depois
              </button>
              <button
                onClick={() => {
                  setShowReminderPopup(false)
                  setActiveTab("jogos-marcados")
                }}
                className="w-full sm:flex-1 py-2.5 px-4 bg-gradient-to-r from-tl-verde to-tl-ciano text-white rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
              >
                Ver Jogos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
