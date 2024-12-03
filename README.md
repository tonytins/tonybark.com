# WhiteBreeze
A small frontend for [WhiteWind](https://whtwnd.com/), a MarkDown blog service using [ATProto](https://atproto.com/).
WhiteBreeze targets a single user and is meant for someone to self-host their WhiteWind blog posts, without having to direct users to the WhiteWind website.

## Usage

If for development:
```sh
npm install
npm run dev
```

If for production:
Change environment variables:
```sh
PUBLIC_HANDLE="myhandle.bsky.social" # Your handle, or DID
PUBLIC_ABOUT="Welcome to my blog!" # Optional description of the kinds of posts you'll be making, or a greeting.
# PUBLIC_ABOUT Shows up under your Bluesky profile description in the profile card.
```

```
npm install
npm build
```