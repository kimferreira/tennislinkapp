"use client"

import { useState } from "react"

interface PendingResultScreenProps {
  onResultPublished: () => void
}

export default function PendingResultScreen({ onResultPublished }: PendingResultScreenProps) {
  const [gameFormat, setGameFormat] = useState<"1set" | "2sets">("2sets")
  const [resultForm, setResultForm] = useState({
    set1Player1: "",
    set1Player2: "",
    set2Player1: "",
    set2Player2: "",
    tiebreakPlayer1: "",
    tiebreakPlayer2: "",
  })

  const pendingGame = {
    opponent: "Davi Campos Ranieri",
    date: "2024-12-20",
    time: "14:00",
    location: "Quadra Central",
  }

  const handleSubmitResult = () => {
    if (!resultForm.set1Player1 || !resultForm.set1Player2) {
      alert("Por favor, insira o placar do 1º set.")
      return
    }

    if (gameFormat === "2sets" && (!resultForm.set2Player1 || !resultForm.set2Player2)) {
      alert("Por favor, insira o placar do 2º set.")
      return
    }

    console.log("Publicando resultado:", { game: pendingGame, format: gameFormat, ...resultForm })
    alert("Resultado publicado com sucesso!")
    onResultPublished()
  }

  return (
    <div className="min-h-screen bg-[var(--tl-fundo)] flex items-center justify-center p-4">
      <div className="card max-w-md w-full p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-tl-verde to-tl-ciano rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2">Resultado Pendente</h2>
          <p className="text-sm text-white/70 mb-4">
            Você possui um jogo com resultado pendente. Para continuar usando o aplicativo, publique o resultado do seu
            último jogo.
          </p>
          <div className="bg-tl-verde/10 border border-tl-verde/20 rounded-lg p-3 mb-4">
            <p className="text-xs text-tl-verde">
              💡 Manter as informações atualizadas garante um ranking justo e melhora a experiência para todos os
              usuários da comunidade Tennis Link.
            </p>
          </div>
        </div>

        <div className="mb-4 p-3 bg-white/5 rounded-lg border-2 border-white/10">
          <p className="text-sm">
            <strong>Oponente:</strong> {pendingGame.opponent}
          </p>
          <p className="text-sm">
            <strong>Data:</strong> {pendingGame.date}
          </p>
          <p className="text-sm">
            <strong>Local:</strong> {pendingGame.location}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Formato do jogo</label>
          <div className="flex gap-2">
            <button
              onClick={() => setGameFormat("1set")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                gameFormat === "1set" ? "bg-tl-verde text-black" : "bg-white/10 text-white"
              }`}
            >
              1 set + tiebreak (7 pts)
            </button>
            <button
              onClick={() => setGameFormat("2sets")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${
                gameFormat === "2sets" ? "bg-tl-verde text-black" : "bg-white/10 text-white"
              }`}
            >
              2 sets + super tiebreak (10 pts)
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Placar *</label>
            <div className="p-4 bg-white/5 rounded-lg border-2 border-white/20 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm w-16">1º set</span>
                <input
                  type="number"
                  min="0"
                  max="7"
                  placeholder="0"
                  value={resultForm.set1Player1}
                  onChange={(e) => setResultForm((prev) => ({ ...prev, set1Player1: e.target.value }))}
                  className="w-12 bg-white/10 border border-white/20 rounded px-2 py-1 text-center text-sm"
                />
                <span className="text-sm">-</span>
                <input
                  type="number"
                  min="0"
                  max="7"
                  placeholder="0"
                  value={resultForm.set1Player2}
                  onChange={(e) => setResultForm((prev) => ({ ...prev, set1Player2: e.target.value }))}
                  className="w-12 bg-white/10 border border-white/20 rounded px-2 py-1 text-center text-sm"
                />
              </div>

              {gameFormat === "2sets" && (
                <div className="flex items-center gap-2">
                  <span className="text-sm w-16">2º set</span>
                  <input
                    type="number"
                    min="0"
                    max="7"
                    placeholder="0"
                    value={resultForm.set2Player1}
                    onChange={(e) => setResultForm((prev) => ({ ...prev, set2Player1: e.target.value }))}
                    className="w-12 bg-white/10 border border-white/20 rounded px-2 py-1 text-center text-sm"
                  />
                  <span className="text-sm">-</span>
                  <input
                    type="number"
                    min="0"
                    max="7"
                    placeholder="0"
                    value={resultForm.set2Player2}
                    onChange={(e) => setResultForm((prev) => ({ ...prev, set2Player2: e.target.value }))}
                    className="w-12 bg-white/10 border border-white/20 rounded px-2 py-1 text-center text-sm"
                  />
                </div>
              )}

              <div className="flex items-center gap-2">
                <span className="text-sm w-16">{gameFormat === "1set" ? "Tie-break" : "Super tie-break"}</span>
                <input
                  type="number"
                  min="0"
                  max={gameFormat === "1set" ? "7" : "10"}
                  placeholder="0"
                  value={resultForm.tiebreakPlayer1}
                  onChange={(e) => setResultForm((prev) => ({ ...prev, tiebreakPlayer1: e.target.value }))}
                  className="w-12 bg-white/10 border border-white/20 rounded px-2 py-1 text-center text-sm"
                />
                <span className="text-sm">-</span>
                <input
                  type="number"
                  min="0"
                  max={gameFormat === "1set" ? "7" : "10"}
                  placeholder="0"
                  value={resultForm.tiebreakPlayer2}
                  onChange={(e) => setResultForm((prev) => ({ ...prev, tiebreakPlayer2: e.target.value }))}
                  className="w-12 bg-white/10 border border-white/20 rounded px-2 py-1 text-center text-sm"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button onClick={handleSubmitResult} className="w-full btn bg-tl-verde text-black font-semibold py-3">
              Publicar Resultado e Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
