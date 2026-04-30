import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Camisas do Brasil — Coleção',
  description: 'Portfólio de camisas da Seleção Brasileira',
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
