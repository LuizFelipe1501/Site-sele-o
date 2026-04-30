export type Camisa = {
  id: number
  nome: string
  ano: number
  image_url: string
}

// Edite essa lista pra adicionar/remover/reordenar camisas.
// A ordem aqui define a ordem no grid editorial.
// Slots maiores (índices 0 e 3) ficam mais visíveis — coloca as fotos mais fortes neles.
export const camisas: Camisa[] = [
  {
    id: 1,
    nome: 'Home Editorial',
    ano: 2024,
    image_url: '/camisas/modelo-amarela-perfil.jpeg',
  },
  {
    id: 2,
    nome: 'Home Cabide',
    ano: 2024,
    image_url: '/camisas/home-cabide.jpeg',
  },
  {
    id: 3,
    nome: 'Detalhe Escudo',
    ano: 2024,
    image_url: '/camisas/modelo-amarela-detalhe.jpeg',
  },
  {
    id: 4,
    nome: 'Away Jordan',
    ano: 2024,
    image_url: '/camisas/away-jordan-cabide.jpeg',
  },
  {
    id: 5,
    nome: 'Home Feminina',
    ano: 2024,
    image_url: '/camisas/modelo-amarela-feminino.jpeg',
  },
]
