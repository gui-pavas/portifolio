# Portifolio

Production-ready containerization for a Vite + React portfolio site.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Bun for dependency installation and build
- Nginx (unprivileged) for static delivery

## Local development

```bash
bun install
bun run dev
```

If you prefer npm:

```bash
npm install
npm run dev
```

## Production build

```bash
bun run build
```

The generated static site is written to `dist/`.

## Docker

Build the image:

```bash
docker build -t portifolio:latest .
```

Run the container:

```bash
docker run --rm -p 8080:8080 portifolio:latest
```

The application will be available at `http://localhost:8080`.

## Docker Compose

Start the service:

```bash
docker compose up -d --build
```

Stop it:

```bash
docker compose down
```

The exposed host port defaults to `8080`. Override it with `PORT`:

```bash
PORT=3000 docker compose up -d --build
```

## Deployment notes

- The runtime image is multi-stage and only contains built static assets plus Nginx.
- Nginx runs as a non-root user on port `8080`.
- SPA routing is enabled with `try_files ... /index.html`.
- Static assets under `/assets` are served with long-lived immutable caching.
- The Compose service uses `restart: unless-stopped`, a healthcheck, read-only filesystem mode, and temporary writable mounts for Nginx runtime paths.

## Recommended deployment flow

1. Build and test locally with `bun run build`.
2. Build the container with `docker build -t your-registry/portifolio:tag .`.
3. Push the image to your registry.
4. Deploy it behind a reverse proxy or ingress that terminates TLS.
5. Map external traffic to container port `8080`.
