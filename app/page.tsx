"use client"

import { useState } from "react"
import LoginScreen from "@/components/login-screen"
import MainApp from "@/components/main-app"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  }

  return <MainApp />
}
