"use client"

import { useState } from "react"

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: "torneios", name: "Torneios" },
    { id: "quadras", name: "Quadras para alugar" },
    { id: "treinadores", name: "Treinadores" },
    { id: "fisioterapia", name: "Fisioterapia" },
    { id: "marketplace", name: "Marketplace" },
  ]

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleBackToHome = () => {
    setSelectedCategory(null)
  }

  const renderCategoryDetail = () => {
    switch (selectedCategory) {
      case "torneios":
        return (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBackToHome}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-extrabold">Torneios</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Campeonato Regional ATN",
                  info: "Nível 8-12 • Premiação R$ 5.000",
                  rating: "4.9",
                  date: "15-20 Jan 2025",
                },
                {
                  title: "Torneio Iniciantes",
                  info: "Nível 1-5 • Inscrições abertas",
                  rating: "4.7",
                  date: "22-25 Jan 2025",
                },
                {
                  title: "Copa Tennis Link",
                  info: "Todos os níveis • Evento mensal",
                  rating: "4.8",
                  date: "28 Jan - 2 Fev 2025",
                },
                {
                  title: "Open São José",
                  info: "Nível 10+ • Premiação R$ 8.000",
                  rating: "4.9",
                  date: "5-10 Fev 2025",
                },
                { title: "Torneio Duplas", info: "Duplas mistas • Nível 6+", rating: "4.6", date: "12-15 Fev 2025" },
                {
                  title: "Championship Series",
                  info: "Elite • Premiação R$ 15.000",
                  rating: "5.0",
                  date: "20-25 Fev 2025",
                },
              ].map((item, index) => (
                <article key={index} className="card p-6 shadow-soft hover:scale-[1.02] transition-transform">
                  <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-tl-azul/30 to-tl-ciano/30 flex items-center justify-center text-white/60 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20">
                      <path
                        fill="currentColor"
                        d="M7 3V1h2v2h6V1h2v2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M3 9v10h18V9H3m4 2v2H5v-2h2m0 4v2H5v-2h2m4-4v2H9v-2h2m0 4v2H9v-2h2m4-4v2h-2v-2h2m0 4v2h-2v-2h2m4-4v2h-2v-2h2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/70 mb-2">{item.info}</p>
                  <p className="text-tl-verde text-sm font-semibold mb-4">{item.date}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">⭐ {item.rating} • São José dos Campos</span>
                    <button className="btn btn-primary">Inscrever-se</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )

      case "quadras":
        return (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBackToHome}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-extrabold">Quadras para alugar</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Quadra Premium Center",
                  info: "Saibro • R$ 80/hora",
                  rating: "4.9",
                  available: "Disponível hoje",
                },
                {
                  title: "Tennis Club Elite",
                  info: "Sintética • R$ 60/hora",
                  rating: "4.7",
                  available: "Disponível amanhã",
                },
                {
                  title: "Arena Sports Complex",
                  info: "Grama sintética • R$ 100/hora",
                  rating: "4.8",
                  available: "Disponível hoje",
                },
                {
                  title: "Centro Esportivo Vale",
                  info: "Saibro • R$ 70/hora",
                  rating: "4.6",
                  available: "Disponível hoje",
                },
                {
                  title: "Clube Tênis São José",
                  info: "Sintética • R$ 55/hora",
                  rating: "4.8",
                  available: "Disponível amanhã",
                },
                { title: "Academia Premium", info: "Indoor • R$ 90/hora", rating: "4.9", available: "Disponível hoje" },
              ].map((item, index) => (
                <article key={index} className="card p-6 shadow-soft hover:scale-[1.02] transition-transform">
                  <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-tl-verde/25 to-tl-ciano/25 flex items-center justify-center text-white/60 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20">
                      <path
                        fill="currentColor"
                        d="M19 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 12H5V8h14"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/70 mb-2">{item.info}</p>
                  <p className="text-tl-verde text-sm font-semibold mb-4">{item.available}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">⭐ {item.rating} • São José dos Campos</span>
                    <button className="btn btn-primary">Reservar</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )

      case "treinadores":
        return (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBackToHome}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-extrabold">Treinadores</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Kim Coach",
                  info: "ATN 15.2 • 10 anos exp.",
                  rating: "4.9",
                  price: "R$ 120/aula",
                  specialty: "Técnica avançada",
                },
                {
                  name: "Davi Campos",
                  info: "ATN 14.8 • Ex-profissional",
                  rating: "4.8",
                  price: "R$ 150/aula",
                  specialty: "Competição",
                },
                {
                  name: "Tullius Ranieri",
                  info: "ATN 13.5 • Técnico juvenil",
                  rating: "4.7",
                  price: "R$ 100/aula",
                  specialty: "Iniciantes",
                },
                {
                  name: "Marina Silva",
                  info: "ATN 12.3 • Especialista iniciantes",
                  rating: "4.9",
                  price: "R$ 90/aula",
                  specialty: "Base técnica",
                },
                {
                  name: "Carlos Roberto",
                  info: "ATN 16.1 • Ex-ATP",
                  rating: "5.0",
                  price: "R$ 200/aula",
                  specialty: "Alto rendimento",
                },
                {
                  name: "Ana Beatriz",
                  info: "ATN 13.8 • Psicologia esportiva",
                  rating: "4.8",
                  price: "R$ 110/aula",
                  specialty: "Mental game",
                },
              ].map((item, index) => (
                <div key={index} className="card p-4">
                  <div className="aspect-square rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    <svg className="w-12 h-12 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-lg mb-1">{item.name}</p>
                  <p className="text-sm text-white/60 mb-2">{item.info}</p>
                  <p className="text-tl-verde text-sm font-semibold mb-2">{item.specialty}</p>
                  <p className="text-white/80 font-bold mb-3">{item.price}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">⭐ {item.rating}</span>
                    <button className="btn btn-outline text-sm">Contratar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "fisioterapia":
        return (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBackToHome}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-extrabold">Fisioterapia</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Carlos Silva",
                  info: "Especialista em lesões esportivas",
                  rating: "4.9",
                  price: "R$ 180/sessão",
                  available: "Hoje disponível",
                },
                {
                  name: "Dra. Ana Costa",
                  info: "Fisioterapia preventiva",
                  rating: "4.8",
                  price: "R$ 160/sessão",
                  available: "Amanhã disponível",
                },
                {
                  name: "Dr. Roberto Lima",
                  info: "Reabilitação pós-lesão",
                  rating: "4.7",
                  price: "R$ 170/sessão",
                  available: "Hoje disponível",
                },
                {
                  name: "Dra. Marina Santos",
                  info: "Fortalecimento muscular",
                  rating: "4.9",
                  price: "R$ 150/sessão",
                  available: "Hoje disponível",
                },
                {
                  name: "Dr. Paulo Henrique",
                  info: "Osteopatia esportiva",
                  rating: "4.8",
                  price: "R$ 200/sessão",
                  available: "Amanhã disponível",
                },
                {
                  name: "Dra. Juliana Reis",
                  info: "Pilates terapêutico",
                  rating: "4.9",
                  price: "R$ 140/sessão",
                  available: "Hoje disponível",
                },
              ].map((item, index) => (
                <div key={index} className="card p-4">
                  <div className="aspect-square rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    <svg className="w-12 h-12 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-lg mb-1">{item.name}</p>
                  <p className="text-sm text-white/60 mb-2">{item.info}</p>
                  <p className="text-tl-verde text-sm font-semibold mb-2">{item.available}</p>
                  <p className="text-white/80 font-bold mb-3">{item.price}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">⭐ {item.rating}</span>
                    <button className="btn btn-outline text-sm">Agendar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "marketplace":
        return (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBackToHome}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-extrabold">Marketplace</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Raquete Wilson Pro Staff",
                  info: "Seminova • R$ 450",
                  rating: "4.8",
                  condition: "Excelente estado",
                  seller: "João Silva",
                },
                {
                  title: "Tênis Nike Court Air Zoom",
                  info: "Novo • R$ 320",
                  rating: "4.9",
                  condition: "Novo na caixa",
                  seller: "Maria Costa",
                },
                {
                  title: "Kit Bolas Penn Championship",
                  info: "3 tubos • R$ 85",
                  rating: "4.7",
                  condition: "Lacrado",
                  seller: "Tennis Store",
                },
                {
                  title: "Raquete Babolat Pure Drive",
                  info: "Usada • R$ 380",
                  rating: "4.6",
                  condition: "Bom estado",
                  seller: "Carlos Lima",
                },
                {
                  title: "Corda Luxilon Big Banger",
                  info: "Nova • R$ 120",
                  rating: "4.8",
                  condition: "Lacrada",
                  seller: "Pro Shop",
                },
                {
                  title: "Bolsa Wilson Tour",
                  info: "Seminova • R$ 180",
                  rating: "4.7",
                  condition: "Muito boa",
                  seller: "Ana Santos",
                },
              ].map((item, index) => (
                <article key={index} className="card p-6 shadow-soft hover:scale-[1.02] transition-transform">
                  <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-tl-azul/25 to-tl-verde/25 flex items-center justify-center text-white/60 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20">
                      <path
                        fill="currentColor"
                        d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1m16 16c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/70 mb-2">{item.info}</p>
                  <p className="text-tl-verde text-sm font-semibold mb-2">{item.condition}</p>
                  <p className="text-white/60 text-sm mb-4">Vendedor: {item.seller}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">⭐ {item.rating}</span>
                    <button className="btn btn-primary">Comprar</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (selectedCategory) {
    return renderCategoryDetail()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <img src="/images/tennis-link-logo.png" alt="Tennis Link" className="h-20 w-auto" />
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Procurar"
              className="w-full rounded-2xl bg-white/5 border border-white/10 py-3 pl-10 pr-4 outline-none text-tl placeholder-white/50"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m21 20.3l-5.6-5.6c.9-1.1 1.4-2.6 1.4-4.2C16.8 6.1 13.7 3 10 3S3.2 6.1 3.2 10S6.3 17 10 17c1.6 0 3.1-.5 4.2-1.4l5.6 5.6zM5.7 10c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3S5.7 12.4 5.7 10"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="chip whitespace-nowrap hover:bg-white/10 transition-colors cursor-pointer"
          >
            {category.name}
          </button>
        ))}
      </div>

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Torneios</h2>
          <button
            onClick={() => handleCategoryClick("torneios")}
            className="text-sm text-tl-verde hover:underline flex items-center gap-1"
          >
            Ver mais <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            { title: "Campeonato Regional ATN", info: "Nível 8-12 • Premiação R$ 5.000", rating: "4.9" },
            { title: "Torneio Iniciantes", info: "Nível 1-5 • Inscrições abertas", rating: "4.7" },
            { title: "Copa Tennis Link", info: "Todos os níveis • Evento mensal", rating: "4.8" },
          ].map((item, index) => (
            <article key={index} className="card p-4 shadow-soft hover:scale-[1.01] transition-transform">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-tl-azul/30 to-tl-ciano/30 flex items-center justify-center text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                  <path
                    fill="currentColor"
                    d="M7 3V1h2v2h6V1h2v2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M3 9v10h18V9H3m4 2v2H5v-2h2m0 4v2H5v-2h2m4-4v2H9v-2h2m0 4v2H9v-2h2m4-4v2h-2v-2h2m0 4v2h-2v-2h2m4-4v2h-2v-2h2"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-white/70">{item.info}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-white/60">⭐ {item.rating} • São José dos Campos</span>
                <button className="btn btn-outline text-sm">Ver mais</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Quadras para alugar</h2>
          <button
            onClick={() => handleCategoryClick("quadras")}
            className="text-sm text-tl-verde hover:underline flex items-center gap-1"
          >
            Ver mais <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            { title: "Quadra Premium Center", info: "Saibro • R$ 80/hora", rating: "4.9" },
            { title: "Tennis Club Elite", info: "Sintética • R$ 60/hora", rating: "4.7" },
            { title: "Arena Sports Complex", info: "Grama sintética • R$ 100/hora", rating: "4.8" },
          ].map((item, index) => (
            <article key={index} className="card p-4 shadow-soft hover:scale-[1.01] transition-transform">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-tl-verde/25 to-tl-ciano/25 flex items-center justify-center text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                  <path
                    fill="currentColor"
                    d="M19 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 12H5V8h14m-8 1h6v6h-6m0 4v2H5v-2h2m0 4v2H5v-2h2m4-4v2h-2v-2h2m0 4v2h-2v-2h2m4-4v2h-2v-2h2"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-white/70">{item.info}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-white/60">⭐ {item.rating} • São José dos Campos</span>
                <button className="btn btn-outline text-sm">Ver mais</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Treinadores</h2>
          <button
            onClick={() => handleCategoryClick("treinadores")}
            className="text-sm text-tl-verde hover:underline flex items-center gap-1"
          >
            Ver mais <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { name: "Kim Coach", info: "ATN 15.2 • 10 anos exp.", rating: "4.9" },
            { name: "Davi Campos", info: "ATN 14.8 • Ex-profissional", rating: "4.8" },
            { name: "Tullius Ranieri", info: "ATN 13.5 • Técnico juvenil", rating: "4.7" },
            { name: "Marina Silva", info: "ATN 12.3 • Especialista iniciantes", rating: "4.9" },
          ].map((item, index) => (
            <div key={index} className="card p-3">
              <div className="aspect-square rounded-xl bg-white/5 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                </svg>
              </div>
              <p className="mt-2 font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-white/60">{item.info}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-white/60">⭐ {item.rating}</span>
                <button className="text-xs text-tl-verde hover:underline">Ver mais</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Fisioterapia</h2>
          <button
            onClick={() => handleCategoryClick("fisioterapia")}
            className="text-sm text-tl-verde hover:underline flex items-center gap-1"
          >
            Ver mais <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { name: "Dr. Carlos Silva", info: "Especialista em lesões esportivas", rating: "4.9" },
            { name: "Dra. Ana Costa", info: "Fisioterapia preventiva", rating: "4.8" },
            { name: "Dr. Roberto Lima", info: "Reabilitação pós-lesão", rating: "4.7" },
            { name: "Dra. Marina Santos", info: "Fortalecimento muscular", rating: "4.9" },
          ].map((item, index) => (
            <div key={index} className="card p-3">
              <div className="aspect-square rounded-xl bg-white/5 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m-7 9a7 7 0 0 1 14 0z" />
                </svg>
              </div>
              <p className="mt-2 font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-white/60">{item.info}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-white/60">⭐ {item.rating}</span>
                <button className="text-xs text-tl-verde hover:underline">Ver mais</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Marketplace</h2>
          <button
            onClick={() => handleCategoryClick("marketplace")}
            className="text-sm text-tl-verde hover:underline flex items-center gap-1"
          >
            Ver mais <span>›</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            { title: "Raquete Wilson Pro Staff", info: "Seminova • R$ 450", rating: "4.8" },
            { title: "Tênis Nike Court Air Zoom", info: "Novo • R$ 320", rating: "4.9" },
            { title: "Kit Bolas Penn Championship", info: "3 tubos • R$ 85", rating: "4.7" },
          ].map((item, index) => (
            <article key={index} className="card p-4 shadow-soft hover:scale-[1.01] transition-transform">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-tl-azul/25 to-tl-verde/25 flex items-center justify-center text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16">
                  <path
                    fill="currentColor"
                    d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1m16 16c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-white/70">{item.info}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-white/60">⭐ {item.rating} • São José dos Campos</span>
                <button className="btn btn-outline text-sm">Ver mais</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
