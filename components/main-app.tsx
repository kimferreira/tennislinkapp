"use client"

import { useState } from "react"
import BottomNavigation from "@/components/bottom-navigation"
import ExploreScreen from "@/components/screens/explore-screen"
import ChallengesScreen from "@/components/screens/challenges-screen"
import RankingScreen from "@/components/screens/ranking-screen"
import InvitesScreen from "@/components/screens/invites-screen"
import ProfileScreen from "@/components/screens/profile-screen"
import JogosMarcadosScreen from "@/components/screens/jogos-marcados-screen"

export default function MainApp() {
  const [activeTab, setActiveTab] = useState("inicio")

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
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
