"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TennisHeaderProps {
  onSearch: () => void
}

export default function TennisHeader({ onSearch }: TennisHeaderProps) {
  return (
    <div className="bg-white p-4 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <span className="text-[#F1C40F]">Tennis</span>
            <span className="text-[#0056A0] ml-1">Link</span>
          </div>
          <div className="relative">
            <div className="w-6 h-6 bg-[#2ECC71] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2 h-0.5 bg-[#F1C40F] rounded-full transform rotate-45"></div>
            <div className="absolute -top-1.5 right-0 w-3 h-0.5 bg-[#F1C40F] rounded-full transform rotate-45"></div>
          </div>
        </div>

        <Button
          onClick={onSearch}
          variant="ghost"
          className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2"
        >
          <span className="text-gray-600">Procurar</span>
          <Search className="text-gray-400" size={16} />
        </Button>
      </div>
    </div>
  )
}
