"use client"

import { useState } from "react"

interface PendingResultScreenProps {
  onResultPublished: () => void
}

export default function PendingResultScreen({ onResultPublished }: PendingResultScreenProps) {
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

  const isTiebreakEnabled = () => {
    const set1P1 = Number.parseInt(resultForm.set1Player1) || 0
    const set1P2 = Number.parseInt(resultForm.set1Player2) || 0
    const set2P1 = Number.parseInt(resultForm.set2Player1) || 0
    const set2P2 = Number.parseInt(resultForm.set2Player2) || 0

    // Só habilita se um jogador ganhou o primeiro set e o outro ganhou o segundo
    const player1WonSet1 = set1P1 > set1P2
    const player2WonSet1 = set1P2 > set1P1
    const player1WonSet2 = set2P1 > set2P2
    const player2WonSet2 = set2P2 > set2P1

    return (player1WonSet1 && player2WonSet2) || (player2WonSet1 && player1WonSet2)
  }

  const validateSetScore = (value: string, isPlayer1: boolean, setNumber: number) => {
    const numValue = Number.parseInt(value) || 0
    const otherPlayerScore =
      setNumber === 1
        ? Number.parseInt(isPlayer1 ? resultForm.set1Player2 : resultForm.set1Player1) || 0
        : Number.parseInt(isPlayer1 ? resultForm.set2Player2 : resultForm.set2Player1) || 0

    // Não permite 7-7
    if (numValue === 7 && otherPlayerScore === 7) {
      return false
    }

    return numValue <= 7
  }

  const validateTiebreakScore = (value: string) => {
    const numValue = Number.parseInt(value) || 0
    return numValue >= 0 && numValue <= 10
  }

  const handleSetScoreChange = (value: string, field: string) => {
    const numValue = Number.parseInt(value) || 0

    // Validação específica para cada campo
    if (field === "set1Player1" && !validateSetScore(value, true, 1)) return
    if (field === "set1Player2" && !validateSetScore(value, false, 1)) return
    if (field === "set2Player1" && !validateSetScore(value, true, 2)) return
    if (field === "set2Player2" && !validateSetScore(value, false, 2)) return

    setResultForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleTiebreakScoreChange = (value: string, field: string) => {
    // Remove caracteres não numéricos
    const cleanValue = value.replace(/[^0-9]/g, "")

    // Valida se está no range 0-10
    if (cleanValue === "" || validateTiebreakScore(cleanValue)) {
      setResultForm((prev) => ({ ...prev, [field]: cleanValue }))
    }
  }

  const handleSubmitResult = () => {
    if (!resultForm.set1Player1 || !resultForm.set1Player2) {
      alert("Por favor, insira o placar do 1º set.")
      return
    }

    if (!resultForm.set2Player1 || !resultForm.set2Player2) {
      alert("Por favor, insira o placar do 2º set.")
      return
    }

    if (isTiebreakEnabled() && (!resultForm.tiebreakPlayer1 || !resultForm.tiebreakPlayer2)) {
      alert("Por favor, insira o placar do Super Tie-break.")
      return
    }

    console.log("Publicando resultado:", { game: pendingGame, ...resultForm })
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

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Placar *</label>
            <div className="p-4 bg-white/5 rounded-lg border-2 border-white/20 space-y-4">
              {/* Header com nomes dos jogadores */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium text-white/70">
                <div></div>
                <div>1º set</div>
                <div>2º set</div>
                <div>Super Tie-break</div>
              </div>

              {/* Jogador 1 */}
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="text-sm font-medium">Davi Campos 1</div>
                <input
                  type="number"
                  min="0"
                  max="7"
                  placeholder="0"
                  value={resultForm.set1Player1}
                  onChange={(e) => handleSetScoreChange(e.target.value, "set1Player1")}
                  className="w-full bg-white/10 border border-white/20 rounded px-2 py-2 text-center text-sm"
                />
                <input
                  type="number"
                  min="0"
                  max="7"
                  placeholder="0"
                  value={resultForm.set2Player1}
                  onChange={(e) => handleSetScoreChange(e.target.value, "set2Player1")}
                  className="w-full bg-white/10 border border-white/20 rounded px-2 py-2 text-center text-sm"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="0"
                  value={resultForm.tiebreakPlayer1}
                  onChange={(e) => handleTiebreakScoreChange(e.target.value, "tiebreakPlayer1")}
                  disabled={!isTiebreakEnabled()}
                  className={`w-full border rounded px-2 py-2 text-center text-sm ${
                    isTiebreakEnabled()
                      ? "bg-white/10 border-white/20"
                      : "bg-white/5 border-white/10 text-white/40 cursor-not-allowed"
                  }`}
                />
              </div>

              {/* Linha divisória */}
              <hr className="border-white/20" />

              {/* Jogador 2 */}
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="text-sm font-medium">Davi Campos</div>
                <input
                  type="number"
                  min="0"
                  max="7"
                  placeholder="0"
                  value={resultForm.set1Player2}
                  onChange={(e) => handleSetScoreChange(e.target.value, "set1Player2")}
                  className="w-full bg-white/10 border border-white/20 rounded px-2 py-2 text-center text-sm"
                />
                <input
                  type="number"
                  min="0"
                  max="7"
                  placeholder="0"
                  value={resultForm.set2Player2}
                  onChange={(e) => handleSetScoreChange(e.target.value, "set2Player2")}
                  className="w-full bg-white/10 border border-white/20 rounded px-2 py-2 text-center text-sm"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="0"
                  value={resultForm.tiebreakPlayer2}
                  onChange={(e) => handleTiebreakScoreChange(e.target.value, "tiebreakPlayer2")}
                  disabled={!isTiebreakEnabled()}
                  className={`w-full border rounded px-2 py-2 text-center text-sm ${
                    isTiebreakEnabled()
                      ? "bg-white/10 border-white/20"
                      : "bg-white/5 border-white/10 text-white/40 cursor-not-allowed"
                  }`}
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
