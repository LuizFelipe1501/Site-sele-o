export type Camisa = {
  id: number
  nome: string
  image_url: string
}

// Edite essa lista pra adicionar/remover/reordenar camisas.
// A ordem aqui define a ordem no grid editorial.
// Os índices 0 e 3 são os slots maiores (mais visíveis) — coloca as fotos mais fortes lá.
export const camisas: Camisa[] = [
  {
    id: 1,
    nome: 'Home Editorial',
    image_url: '/camisas/modelo-amarela-perfil.jpeg',
  },
  {
    id: 2,
    nome: 'Home Cabide',
    image_url: '/camisas/home-cabide.jpeg',
  },
  {
    id: 3,
    nome: 'Detalhe Escudo',
    image_url: '/camisas/modelo-amarela-detalhe.jpeg',
  },
  {
    id: 4,
    nome: 'Home Feminina',
    image_url: '/camisas/modelo-amarela-feminino.jpeg',
  },
  {
    id: 5,
    nome: 'Away Jordan',
    image_url: '/camisas/away-jordan-cabide.jpeg',
  },
]

// Configuração do WhatsApp pra venda
export const WHATSAPP_NUMBER = '5538999610442' // formato internacional, sem +, espaços ou hífens

export function getWhatsappLink(nomeCamisa?: string): string {
  const mensagem = nomeCamisa
    ? `Oi! Tenho interesse na camisa ${nomeCamisa}.`
    : 'Oi! Tenho interesse nas camisas do Brasil.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
