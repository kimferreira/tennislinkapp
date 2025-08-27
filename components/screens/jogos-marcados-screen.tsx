"use client"

import { useState } from "react"

export default function JogosMarcadosScreen() {
  const [showResultModal, setShowResultModal] = useState(false)
  const [selectedGame, setSelectedGame] = useState<any>(null)
  const [gameFormat, setGameFormat] = useState<"1set" | "2sets">("2sets")
  const [resultForm, setResultForm] = useState({
    set1Player1: "",
    set1Player2: "",
    set2Player1: "",
    set2Player2: "",
    tiebreakPlayer1: "",
    tiebreakPlayer2: "",
  })

  const scheduledGames = [
    {
      id: 1,
      opponent: "Davi Campos Ranieri",
      date: "2024-12-20",
      time: "14:00",
      location: "Quadra Central",
      status: "confirmado",
      needsResult: true,
    },
    {
      id: 3,
      opponent: "João Santos",
      date: "2024-12-18",
      time: "09:00",
      location: "Arena Sports",
      status: "finalizado",
      needsResult: false,
      result: "6-4, 7-5",
    },
  ]

  const handlePublishResult = (game: any) => {
    setSelectedGame(game)
    setShowResultModal(true)
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

    console.log("Publicando resultado:", { game: selectedGame, format: gameFormat, ...resultForm })
    setShowResultModal(false)
    setSelectedGame(null)
    setResultForm({
      set1Player1: "",
      set1Player2: "",
      set2Player1: "",
      set2Player2: "",
      tiebreakPlayer1: "",
      tiebreakPlayer2: "",
    })
    alert("Resultado publicado com sucesso!")
  }

  return (
    <section className="pb-20">
      <div className="bg-[linear-gradient(135deg,var(--tl-verde),var(--tl-ciano),var(--tl-azul))] rounded-3xl mx-4 mt-4 p-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-white">Jogos</h1>
        <div className="ml-auto">
          <button className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium flex items-center gap-2">
            Filtros
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="currentColor" d="M3 4.5h18v2H3zm3 5.5h12v2H6zm3 5.5h6v2H9z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {scheduledGames.map((game) => (
            <div key={game.id} className="card p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{game.opponent}</h3>
                    <p className="text-sm text-white/70">
                      {game.date} às {game.time}
                    </p>
                    <p className="text-xs text-white/60">{game.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      game.status === "confirmado" ? "bg-tl-verde/20 text-tl-verde" : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {game.status === "confirmado" ? "Confirmado" : "Finalizado"}
                  </div>
                  {game.result && <p className="text-xs text-white/60 mt-1">Resultado: {game.result}</p>}
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                {game.needsResult && (
                  <button
                    onClick={() => handlePublishResult(game)}
                    className="btn bg-tl-verde text-black font-semibold text-sm px-4 py-2"
                  >
                    Publicar Resultado
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showResultModal && selectedGame && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Publicar resultado</h3>
              <button onClick={() => setShowResultModal(false)} className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4 p-3 bg-white/5 rounded-lg border-2 border-white/10">
              <p className="text-sm">
                <strong>Oponente:</strong> {selectedGame.opponent}
              </p>
              <p className="text-sm">
                <strong>Data:</strong> {selectedGame.date}
              </p>
              <p className="text-sm">
                <strong>Local:</strong> {selectedGame.location}
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

              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowResultModal(false)} className="flex-1 btn btn-outline">
                  Cancelar
                </button>
                <button onClick={handleSubmitResult} className="flex-1 btn bg-tl-verde text-black font-semibold">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
