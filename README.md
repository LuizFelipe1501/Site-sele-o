# Camisas do Brasil 🇧🇷

Landing page editorial estilo Lando Norris, paleta verde-amarela-azul. 100% estática — fotos hospedadas direto no projeto.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Vercel (deploy)

---

## 🚀 Rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## ➕ Adicionar uma camisa nova

1. Coloca a foto em `/public/camisas/` (jpeg ou png)
2. Edita `data/camisas.ts` e adiciona uma entrada nova:

```ts
{
  id: 6,
  nome: 'Nome da Camisa',
  ano: 2024,
  image_url: '/camisas/nome-do-arquivo.jpeg',
}
```

3. Salva e o site atualiza sozinho.

A ordem na lista define a ordem no grid. Os índices 0 e 3 são os slots maiores (mais visíveis) — coloca as fotos mais fortes lá.

## 🚀 Deploy na Vercel

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/camisas-brasil.git
git push -u origin main
```

Em [vercel.com](https://vercel.com): **Add New** → **Project** → importa o repo → **Deploy**.

Não precisa de variáveis de ambiente. Em ~1min tá no ar.

## 📁 Estrutura

```
.
├── app/
│   ├── globals.css       # Estilo + tipografia + animações
│   ├── layout.tsx        # Layout raiz
│   └── page.tsx          # Landing page
├── data/
│   └── camisas.ts        # Lista das camisas (editar aqui)
├── public/
│   └── camisas/          # Fotos das camisas
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🎨 Identidade visual

- **Tipografia**: Bebas Neue (display) + Inter (texto)
- **Paleta**: verde `#009C3B` · amarelo `#FFDF00` · azul `#002776`
- **Fundo**: preto puro (`#000`)
- **Vibe**: editorial sport, asymmetric grid, hover reveal nas cards
