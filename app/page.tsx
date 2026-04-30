import { camisas } from '@/data/camisas'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-brasil-amarelo rounded-full animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase font-medium">Coleção · 2026</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase font-medium">
          <a href="#colecao" className="hover:text-brasil-amarelo transition">Coleção</a>
          <a href="#sobre" className="hover:text-brasil-amarelo transition">Sobre</a>
        </div>
      </nav>

      {/* HERO — Lando Norris style */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden grain">
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
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-brasil-amarelo mb-6 fade-up">
              Brazil National Team Kits
            </p>
          </div>

          <h1 className="hero-text text-[20vw] md:text-[16vw] uppercase leading-[0.85]">
            <span className="block">Camisas</span>
            <span className="block text-brasil-amarelo">do Brasil</span>
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              Uma coleção pessoal dedicada às camisas da Seleção Brasileira. Cada peça carrega memória, identidade e a história do futebol mais vencedor do mundo.
            </p>
            <a
              href="#colecao"
              className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-medium border-b border-white/30 pb-2 hover:border-brasil-amarelo hover:text-brasil-amarelo transition w-fit"
            >
              Ver Coleção
              <span className="group-hover:translate-x-1 transition">↓</span>
            </a>
          </div>
        </div>

        {/* Faixa diagonal Brasil canto */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 z-10 overflow-hidden">
          <div className="diagonal-stripe absolute -top-12 -right-12 w-64 h-64 rotate-45 opacity-90" />
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
              <h2 className="hero-text text-7xl md:text-9xl uppercase leading-none">
                A Coleção
              </h2>
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              {camisas.length} {camisas.length === 1 ? 'peça' : 'peças'} · atualizado constantemente
            </p>
          </div>

          {/* Grid asymmetric estilo editorial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {camisas.map((camisa, i) => {
              // Layout asymmetric: alterna tamanhos pra dar ritmo editorial
              const layouts = [
                'md:col-span-7 md:row-span-2',
                'md:col-span-5',
                'md:col-span-5',
                'md:col-span-7',
                'md:col-span-6',
                'md:col-span-6',
              ]
              const span = layouts[i % layouts.length]
              const aspectClass = i % 6 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'

              return (
                <article
                  key={camisa.id}
                  className={`shirt-card relative overflow-hidden bg-zinc-950 group ${span}`}
                >
                  <div className={`relative ${aspectClass} overflow-hidden bg-gradient-to-br from-zinc-900 to-black`}>
                    <Image
                      src={camisa.image_url}
                      alt={camisa.nome}
                      fill
                      className="shirt-img object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Overlay gradiente bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                    {/* Número grande no canto */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <span className="number-outline hero-text text-5xl md:text-7xl block leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Info bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 shirt-info">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs tracking-[0.3em] uppercase text-brasil-amarelo mb-2">
                            {camisa.ano}
                          </p>
                          <h3 className="hero-text text-3xl md:text-5xl uppercase leading-none">
                            {camisa.nome}
                          </h3>
                        </div>
                        <div className="flex flex-col gap-1.5 shrink-0">
                          <div className="w-1 h-6 bg-brasil-verde" />
                          <div className="w-1 h-6 bg-brasil-amarelo" />
                          <div className="w-1 h-6 bg-brasil-azul" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
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
              Mais que<br/>
              <span className="text-brasil-amarelo">camisas</span>.<br/>
              Memória.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Cada camisa é um capítulo. Da magia de 70 ao penta de 2002, da Copa em casa de 2014 às edições atuais. Esta é uma celebração do que a verde-amarela representa.
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
          <div>
            <p className="hero-text text-3xl uppercase">
              Camisas do <span className="text-brasil-amarelo">Brasil</span>
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mt-2">
              Coleção pessoal · {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-1">
            <div className="w-12 h-1 bg-brasil-verde" />
            <div className="w-12 h-1 bg-brasil-amarelo" />
            <div className="w-12 h-1 bg-brasil-azul" />
          </div>
        </div>
      </footer>
    </main>
  )
}
