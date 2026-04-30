import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Camisas do Brasil — Loja',
  description: 'Camisas oficiais e edições especiais da Seleção Brasileira. Compre direto pelo WhatsApp.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
