'use client'

import { useState } from 'react'
import { camisas, yellowShirtImages, getWhatsappLink } from '@/data/camisas'
import Image from 'next/image'

// Componente Carrossel de Fotos
function ProductCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-full group/carousel overflow-hidden">
      {/* Imagens */}
      <div className="relative w-full h-full flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-full shrink-0">
            <Image
              src={img}
              alt={`Visualização da camisa amarela ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
        aria-label="Foto anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
        aria-label="Próxima foto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicadores (pontos) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-brasil-amarelo w-6'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Ícone WhatsApp (SVG inline pra não depender de pacote externo)
function WhatsappIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
        <div className="px-6 md:px-12 py-4 flex justify-between items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="CH Sports"
              width={44}
              height={44}
              className="w-9 h-9 md:w-11 md:h-11 object-contain"
              priority
            />
            <span className="hero-text text-xl md:text-2xl uppercase tracking-tight">
              CH <span className="text-brasil-amarelo">Sports</span>
            </span>
          </a>

          {/* Links centro */}
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase font-medium">
            <a href="#colecao" className="hover:text-brasil-amarelo transition">Coleção</a>
            <a href="#sobre" className="hover:text-brasil-amarelo transition">Sobre</a>
          </div>

          {/* CTA WhatsApp */}
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide"
          >
            <WhatsappIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Comprar</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden grain pt-24">
        {/* Background com foto da camisa */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />
          <Image
            src="/camisas/modelo-amarela-perfil.jpeg"
            alt=""
            fill
            priority
            className="object-cover opacity-50 scale-110"
          />
        </div>

        {/* Big text */}
        <div className="relative z-20 px-6 md:px-12 pb-20 md:pb-32">
          <div className="overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-brasil-amarelo rounded-full pulse-dot" />
              <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-brasil-amarelo">
                CH Sports · Disponível
              </p>
            </div>
          </div>

          <h1 className="hero-text uppercase leading-[0.85]" style={{ fontSize: 'clamp(4rem, 14vw, 14rem)' }}>
            <span className="block">Camisas</span>
            <span className="block text-brasil-amarelo">do Brasil</span>
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              Torça para o Brasil na Copa do Mundo usando CH Sports. Camisa do Brasil 1:1 Tailandesa, 100% igual a original!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#colecao"
                className="group flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase font-medium border border-white/30 px-6 py-3 hover:border-brasil-amarelo hover:text-brasil-amarelo transition"
              >
                Ver Coleção
                <span className="group-hover:translate-x-1 transition">↓</span>
              </a>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold"
              >
                <WhatsappIcon className="w-5 h-5" />
                Comprar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-8 border-y border-white/10 overflow-hidden bg-black">
        <div className="marquee flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {['Pentacampeão', '★★★★★', '1958 · 1962 · 1970 · 1994 · 2002', '★★★★★', 'CBF', '★★★★★', 'Verde Amarela', '★★★★★'].map((text, j) => (
                <span
                  key={j}
                  className={`hero-text text-4xl md:text-6xl uppercase ${j % 2 === 1 ? 'text-brasil-amarelo' : 'text-white/40 number-outline'}`}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* COLEÇÃO */}
      <section id="colecao" className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          {/* Header da seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-brasil-amarelo mb-4">
                01 — Acervo
              </p>
              <h2 className="hero-text text-5xl md:text-7xl uppercase leading-none">
                Camisa Brasil Amarela Copa do Mundo
              </h2>
            </div>
            <p className="text-sm text-white/60 max-w-xs font-semibold tracking-wider">
              Últimas 09 peças disponíveis
            </p>
          </div>

          {/* Grid asymmetric editorial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {camisas.map((camisa, i) => {
              const layouts = [
                'md:col-span-7',
                'md:col-span-5',
              ]
              const span = layouts[i % layouts.length]
              const aspectClass = i === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'
              const isCarousel = camisa.id === 1

              return (
                <article
                  key={camisa.id}
                  className={`flex flex-col bg-zinc-950/40 rounded-2xl border border-white/5 overflow-hidden group ${span}`}
                >
                  {/* Container da Imagem ou Carrossel */}
                  <div className={`relative ${aspectClass} overflow-hidden bg-gradient-to-br from-zinc-900 to-black`}>
                    {isCarousel ? (
                      <ProductCarousel images={yellowShirtImages} />
                    ) : (
                      <Image
                        src={camisa.image_url}
                        alt={camisa.nome}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}

                    {/* Número grande no canto */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 pointer-events-none">
                      <span className="number-outline hero-text text-5xl md:text-7xl block leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Informações abaixo da imagem */}
                  <div className="p-6 md:p-8 flex flex-col gap-5 justify-between flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        {!isCarousel ? (
                          <h3 className="hero-text text-2xl md:text-3xl uppercase tracking-wide text-white/90">
                            {camisa.nome === 'Home Feminina' ? 'Modelo Feminino' : camisa.nome}
                          </h3>
                        ) : null}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-1.5 h-1.5 bg-brasil-verde rounded-full pulse-dot" />
                          <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-brasil-verde font-semibold">
                            Disponível
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end">
                        <span className="text-xs text-white/40 line-through">R$ 220,00</span>
                        <span className="text-xl md:text-2xl font-extrabold text-brasil-amarelo">R$ 170,00</span>
                      </div>
                    </div>

                    <a
                      href={getWhatsappLink(isCarousel ? 'Camisa Brasil Amarela Copa do Mundo' : (camisa.nome === 'Home Feminina' ? 'Modelo Feminino' : camisa.nome))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex items-center justify-center gap-2 w-full py-3.5 text-xs tracking-[0.15em] uppercase font-bold rounded-xl shadow-lg shadow-green-950/20"
                    >
                      <WhatsappIcon className="w-4 h-4" />
                      Comprar pelo WhatsApp
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 border border-brasil-verde/40 rounded-full">
              <div className="w-2 h-2 bg-brasil-verde rounded-full pulse-dot" />
              <span className="text-xs tracking-[0.3em] uppercase text-brasil-verde font-semibold">
                Atendimento direto
              </span>
            </div>
          </div>

          <h2 className="hero-text text-5xl md:text-8xl uppercase leading-[0.9] mb-6">
            Bora vestir<br />
            a <span className="text-brasil-amarelo">amarelinha</span>?
          </h2>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Chama no WhatsApp pra ver disponibilidade, tirar dúvidas e fechar a sua. Atendimento rápido e direto.
          </p>

          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold tracking-wider uppercase rounded-full"
          >
            <WhatsappIcon className="w-6 h-6" />
            Falar no WhatsApp
          </a>

          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mt-6">
            +55 38 99961-0442
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative px-6 md:px-12 py-32 md:py-48 overflow-hidden grain">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-brasil-amarelo mb-6">
              02 — Sobre
            </p>
            <h2 className="hero-text text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              Mais que<br />
              <span className="text-brasil-amarelo">camisas</span>.<br />
              Memória.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Cada camisa é um capítulo. Da magia de 70 ao penta de 2002, da Copa em casa de 2014 às edições atuais. Aqui é uma celebração do que a verde-amarela representa — vestir o Brasil, levar o orgulho.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-end">
            <div className="text-right">
              <p className="hero-text text-[8rem] md:text-[14rem] leading-none text-brasil-verde">5</p>
              <p className="text-xs tracking-[0.4em] uppercase text-white/60 mt-2">
                Mundiais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-12 py-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CH Sports"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <div>
              <p className="hero-text text-2xl uppercase">
                CH <span className="text-brasil-amarelo">Sports</span>
              </p>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mt-1">
                Camisas do Brasil · {new Date().getFullYear()}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/70 hover:text-brasil-verde transition"
            >
              <WhatsappIcon className="w-4 h-4" />
              +55 38 99961-0442
            </a>
            <div className="flex gap-1">
              <div className="w-12 h-1 bg-brasil-verde" />
              <div className="w-12 h-1 bg-brasil-amarelo" />
              <div className="w-12 h-1 bg-brasil-azul" />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={getWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 btn-whatsapp w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-black/50"
        aria-label="Falar no WhatsApp"
      >
        <WhatsappIcon className="w-7 h-7" />
      </a>
    </main>
  )
}
