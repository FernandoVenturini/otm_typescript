🧱 Passo 1 — Criar a pasta do projeto monorepo
  -> mkdir meu-projeto
  -> cd meu-projeto


🧩 Passo 2 — Criar o frontend (React + Vite + TypeScript + Tailwind)
# dentro da pasta "meu-projeto"
npm create vite@latest frontend -- --template react-ts
cd frontend

# instalar dependências
npm install

# instalar TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

⚙️ Configurar Tailwind:
Editar tailwind.config.js:
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Editar src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

✅ Testar app
npm run dev

⚙️ Passo 3 — Criar o backend (Node.js com Express)
cd ..
mkdir backend
cd backend
npm init -y
npm install express cors

Se quiser com TypeScript (recomendado):
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init

Adicionar script no package.json:
"scripts": {
  "dev": "ts-node-dev src/index.ts"
}

Criar servidor básico:
mkdir src
touch src/index.ts

src/index.ts:
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API rodando 🚀')
})

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})
