# NUCLIC Website

Website institucional do NUCLIC, Núcleo de Sistemas de Computação da UFC Sobral.

Stack: React, Vite, TypeScript, React Router v6, Tailwind CSS v3, Framer Motion, React Icons e Formspree.

## Requisitos

- Node.js 20+
- npm 10+
- Docker e Docker Compose, para testes em container
- Cluster Kubernetes com Traefik CRDs, para deploy via `IngressRoute`

## Instalação local

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O Vite sobe em `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

O build de produção é gerado em `dist/`.

## Formspree

O formulário de contato está em `src/pages/Contato.tsx` e usa o endpoint:

```txt
https://formspree.io/f/SEU_ID_FORMSPREE
```

Substitua `SEU_ID_FORMSPREE` pelo ID real do formulário no Formspree antes de publicar.

## Docker

Build da imagem:

```bash
docker build -t nuclic-website:latest .
```

Execução direta na porta 80:

```bash
docker run --rm -p 80:80 nuclic-website:latest
```

O container usa `serve -s dist -l 80`, com fallback para `index.html` necessário ao React Router.

## Docker Compose com Traefik

```bash
docker-compose up --build
```

Aplicação: `http://localhost`

Dashboard Traefik: `http://localhost:8080`

## Kubernetes com Traefik

1. Gere e publique a imagem no registry usado pelo cluster.
2. Atualize `image: nuclic-website:latest` em `kubernetes/deployment.yaml`.
3. Ajuste o host `nuclic.sobral.ufc.br` se necessário.
4. Aplique o manifesto:

```bash
kubectl apply -f kubernetes/deployment.yaml
```

O manifesto cria `Namespace`, `Deployment`, `Service`, `Middleware` de headers de segurança e `IngressRoute` do Traefik.

## Rotas

- `/` - Home
- `/quem-somos` - Sobre o NUCLIC
- `/projetos` - Projetos internos
- `/expoiot` - ExpoIoT
- `/contato` - Contato
- `/noticias` - 404 customizado
- Qualquer rota não mapeada - 404 customizado
