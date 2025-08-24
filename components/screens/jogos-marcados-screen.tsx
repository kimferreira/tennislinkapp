"use client"

import { useState } from "react"

export default function JogosMarcadosScreen() {
  const [showResultModal, setShowResultModal] = useState(false)
  const [selectedGame, setSelectedGame] = useState<any>(null)
  const [resultForm, setResultForm] = useState({
    score: "",
    photos: [] as File[],
    description: "",
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
      id: 2,
      opponent: "Marina Silva",
      date: "2024-12-22",
      time: "16:30",
      location: "Tennis Club Elite",
      status: "pendente",
      needsResult: false,
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
    if (!resultForm.score) {
      alert("Por favor, insira o placar do jogo.")
      return
    }

    console.log("Publicando resultado:", { game: selectedGame, ...resultForm })
    setShowResultModal(false)
    setSelectedGame(null)
    setResultForm({ score: "", photos: [], description: "" })
    alert("Resultado publicado com sucesso!")
  }

  return (
    <section className="pb-20">
      <div className="h-24 bg-[linear-gradient(135deg,rgba(0,99,166,.8),rgba(0,169,224,.8),rgba(0,200,187,.8))] flex items-center justify-center">
        <h1 className="text-2xl font-extrabold text-white">Jogos Marcados</h1>
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
                      game.status === "confirmado"
                        ? "bg-tl-verde/20 text-tl-verde"
                        : game.status === "pendente"
                          ? "bg-yellow-500/20 text-yellow-500"
                          : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {game.status === "confirmado"
                      ? "Confirmado"
                      : game.status === "pendente"
                        ? "Pendente"
                        : "Finalizado"}
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
                {game.status === "pendente" && (
                  <>
                    <button className="btn btn-outline text-sm">Cancelar</button>
                    <button className="btn bg-tl-azul text-white text-sm">Confirmar</button>
                  </>
                )}
                {game.status === "confirmado" && !game.needsResult && (
                  <button className="btn btn-outline text-sm">Detalhes</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de publicação de resultado */}
      {showResultModal && selectedGame && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Publicar Resultado</h3>
              <button onClick={() => setShowResultModal(false)} className="text-white/60 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4 p-3 bg-white/5 rounded-lg">
              <p className="text-sm">
                <strong>Oponente:</strong> {selectedGame.opponent}
              </p>
              <p className="text-sm">
                <strong>Data:</strong> {selectedGame.date} às {selectedGame.time}
              </p>
              <p className="text-sm">
                <strong>Local:</strong> {selectedGame.location}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Placar *</label>
                <input
                  type="text"
                  placeholder="Ex: 6-4, 7-5 ou 6-3, 4-6, 6-2"
                  value={resultForm.score}
                  onChange={(e) => setResultForm((prev) => ({ ...prev, score: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Fotos do jogo</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || [])
                    setResultForm((prev) => ({ ...prev, photos: files }))
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <textarea
                  placeholder="Conte como foi o jogo..."
                  value={resultForm.description}
                  onChange={(e) => setResultForm((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none h-20 resize-none"
                />
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
