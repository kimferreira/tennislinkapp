import { Button } from "@/components/ui/button"

interface PlayerCardProps {
  name: string
  location: string
  rating: string
  age: string
  ranking: string
  showActions?: boolean
  actionType?: "challenge" | "invite" | "proposal"
}

export default function PlayerCard({
  name,
  location,
  rating,
  age,
  ranking,
  showActions = false,
  actionType = "challenge",
}: PlayerCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
          <p className="text-sm text-gray-600">
            Rating: {rating} Idade: {age} Ranking: {ranking}
          </p>
          <Button variant="link" className="text-sm p-0 h-auto mt-1">
            Ver mais
          </Button>
        </div>

        {showActions && (
          <div className="flex flex-col space-y-2">
            {actionType === "challenge" && (
              <>
                <Button className="tennis-yellow text-black text-sm px-4 py-1 rounded-full">Aceitar</Button>
                <Button className="tennis-blue text-white text-sm px-4 py-1 rounded-full">Proposta</Button>
                <Button className="tennis-red text-white text-sm px-4 py-1 rounded-full">Recusar</Button>
              </>
            )}
            {actionType === "invite" && (
              <>
                <div className="tennis-green text-white text-sm px-3 py-1 rounded-full text-center">
                  Tempo restante
                  <br />2 dias e 14:30 horas
                </div>
                <Button className="tennis-red text-white text-sm px-4 py-1 rounded-full">Cancelar</Button>
              </>
            )}
            {actionType === "proposal" && (
              <>
                <div className="tennis-yellow text-black text-sm px-3 py-1 rounded-full text-center">
                  Tempo restante
                  <br />1 dia e 10:00 horas
                </div>
                <Button className="tennis-green text-white text-sm px-4 py-1 rounded-full">Ver proposta</Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
