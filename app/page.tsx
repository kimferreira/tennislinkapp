"use client"

import { useState } from "react"
import LoginScreen from "@/components/login-screen"
import MainApp from "@/components/main-app"
import PendingResultScreen from "@/components/pending-result-screen"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasPendingResult, setHasPendingResult] = useState(true) // Simulating pending result

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  }

  if (hasPendingResult) {
    return <PendingResultScreen onResultPublished={() => setHasPendingResult(false)} />
  }

  return <MainApp />
}
