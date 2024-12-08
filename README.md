# TonyBark.com

A small, self-hosted [WhiteWind](https://whtwnd.com/) blog, powered by [WhiteBreeze](https://github.com/hugeblank/whitebreeze).

## Usage

*[Bun](https://bun.sh/) recommended.*

### Environment variables

Whether in development or production, you will need to change environment variables when working with WhiteBreeze.

```sh
PUBLIC_HANDLE="myhandle.bsky.social" # Your handle, or DID
PUBLIC_ABOUT="Welcome to my blog!" # Optional description of the kinds of posts you'll be making, or a greeting.
# PUBLIC_ABOUT Shows up under your Bluesky profile description in the profile card.
```

### Development

```sh
npm install
npm run dev
```

### Standalone

```
npm install
npm run build
node index.js
```
Put environment variables ahead of the last command, port can also be configured with `PORT`.

### Dockerized

Modify `docker-compose.yaml` and change the host port if necessary.

```
docker compose up
```