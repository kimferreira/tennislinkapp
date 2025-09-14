"use client"

import { useState, useEffect } from "react"
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
  const [navigationCount, setNavigationCount] = useState(0)

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

  useEffect(() => {
    if (navigationCount >= 3 && acceptedInvites.length > 0) {
      const timer = setTimeout(() => {
        setShowReminderPopup(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [navigationCount, acceptedInvites.length])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setNavigationCount((prev) => prev + 1)
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
      <div className="safe">{renderScreen()}</div>
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {showReminderPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-tl-card rounded-2xl p-6 max-w-sm w-full mx-4 shadow-soft border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-tl-verde to-tl-ciano rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-tl">Lembrete</h3>
              </div>
              <button
                onClick={() => setShowReminderPopup(false)}
                className="text-gray-400 hover:text-tl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-tl mb-3">
                Olá <span className="font-semibold text-tl-verde">Marina</span>! Você possui alguns convites aceitos,
                atente-se à data e local para não perder seu jogo.
              </p>

              <div className="space-y-3">
                {acceptedInvites.slice(0, 2).map((invite, index) => (
                  <div key={index} className="bg-tl-escuro/50 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-tl">{invite.opponent}</span>
                      <span className="text-sm text-tl-verde font-medium">Confirmado</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{invite.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{invite.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-300 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{invite.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowReminderPopup(false)}
                className="flex-1 py-2.5 px-4 bg-gray-600/20 text-gray-300 rounded-lg font-medium hover:bg-gray-600/30 transition-colors"
              >
                Depois
              </button>
              <button
                onClick={() => {
                  setShowReminderPopup(false)
                  setActiveTab("jogos-marcados")
                }}
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-tl-verde to-tl-ciano text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
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
