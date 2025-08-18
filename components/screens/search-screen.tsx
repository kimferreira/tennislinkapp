"use client"

import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface SearchScreenProps {
  onBack: () => void
}

export default function SearchScreen({ onBack }: SearchScreenProps) {
  const suggestedPlayers = [
    {
      name: "Ana Carolina Mendes",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.2",
      age: "25",
      ranking: "1100",
    },
    {
      name: "Roberto Silva Santos",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.0",
      age: "30",
      ranking: "1350",
    },
    {
      name: "Mariana Costa Lima",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.3",
      age: "28",
      ranking: "1050",
    },
  ]

  const tournaments = [
    {
      date: "15/12/2024",
      title: "ETAPA 24 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
      location: "São José dos Campos, São Paulo, Brasil",
      prize: "R$ 3.0k Premiação",
      players: "30 Jogadores",
      atn: "ATN 1.0 - 100.00",
      format: "Simples/duplas",
      surface: "Saibro",
    },
    {
      date: "22/12/2024",
      title: "ETAPA 25 - CSA CIRCUITO ROBIN SODERLING TENNS TOUR BRASIL...",
      location: "São José dos Campos, São Paulo, Brasil",
      prize: "R$ 2.5k Premiação",
      players: "24 Jogadores",
      atn: "ATN 2.0 - 80.00",
      format: "Simples",
      surface: "Saibro",
    },
  ]

  const trainers = [
    {
      name: "Professor Carlos Oliveira",
      location: "São José dos Campos, São Paulo, Brasil",
      rating: "4.8",
      age: "45",
      ranking: "Profissional",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onBack} className="p-0">
            <ArrowLeft size={24} />
          </Button>
          <div className="flex-1 relative">
            <Input placeholder="Procurar" className="bg-gray-100 rounded-full pl-4 pr-10" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Pesquisas sugeridas */}
        <div className="tennis-green text-white p-3 rounded-t-2xl">
          <h2 className="font-semibold">Pesquisas sugeridas</h2>
        </div>

        {/* Jogadores */}
        <div>
          <h3 className="font-semibold mb-3">Jogadores</h3>
          <div className="space-y-3">
            {suggestedPlayers.map((player, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium">{player.name}</h4>
                  <p className="text-sm text-gray-600">{player.location}</p>
                  <p className="text-sm text-gray-600">
                    Rating: {player.rating} Idade: {player.age} Ranking: {player.ranking}
                  </p>
                </div>
                <Button variant="link" className="text-sm">
                  Ver mais
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Torneios */}
        <div>
          <h3 className="font-semibold mb-3">Torneios</h3>
          <div className="space-y-4">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="p-4 border-2 border-black rounded-lg">
                <div className="text-sm text-gray-600 mb-2">{tournament.date}</div>
                <h4 className="font-semibold mb-2">{tournament.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{tournament.location}</p>
                <div className="border-t border-[#F1C40F] pt-2">
                  <p className="text-sm">
                    {tournament.prize} • {tournament.players} • {tournament.atn} • {tournament.format} •{" "}
                    {tournament.surface}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Treinadores */}
        <div>
          <h3 className="font-semibold mb-3">Treinadores</h3>
          <div className="space-y-3">
            {trainers.map((trainer, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium">{trainer.name}</h4>
                  <p className="text-sm text-gray-600">{trainer.location}</p>
                  <p className="text-sm text-gray-600">
                    Rating: {trainer.rating} Idade: {trainer.age} Ranking: {trainer.ranking}
                  </p>
                </div>
                <Button variant="link" className="text-sm">
                  Ver mais
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
