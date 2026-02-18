# Personal Dashboard

A sleek, minimal personal dashboard with live Discord status, Spotify integration, GitHub projects, particle effects, and a custom cursor — all powered by a single config file.

![Dashboard Preview](https://img.shields.io/badge/status-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## Features

- **Live Discord Status** — Shows your online/idle/dnd/offline status in real-time via [Lanyard](https://github.com/Phineas/lanyard)
- **Spotify Now Playing** — Displays the song you're currently listening to with album art and progress bar
- **Discord Activity** — Shows what game or app you're currently using
- **GitHub Projects** — Automatically fetches and displays your latest public repos
- **Particle Background** — Interactive particle network that reacts to your cursor
- **Custom Cursor** — Glowing cursor with click sparkle effects
- **Background Music** — Optional music toggle button
- **Fully Responsive** — Works on desktop and mobile
- **Single Config File** — Edit one file to make it yours

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/dashboard.git
cd dashboard
```

### 2. Edit the config

Open `js/config.js` and fill in your details:

```js
const CONFIG = {
    username: 'YourUsername',
    realName: 'Your Name',
    bio: 'Your bio goes here.',
    siteUrl: 'https://yourdomain.com',
    avatarUrl: 'assets/avatar.png',

    discordId: 'YOUR_DISCORD_ID',
    githubUsername: 'YourGitHubUsername',

    socials: {
        discord: 'https://discord.com/users/YOUR_DISCORD_ID',
        spotify: 'https://open.spotify.com/user/YOUR_SPOTIFY_ID',
        github: 'https://github.com/YourGitHubUsername',
    },

    enableMusic: true,

    techStack: ['Python', 'JavaScript', 'Rust', 'Java', 'HTML', 'CSS', 'Node.js', 'Tailwind', 'Git'],

    footerText: '© 2026 YourUsername',
};
```

### 3. Set up Lanyard (for Discord status)

For live Discord status to work, you need to join the [Lanyard Discord server](https://discord.gg/lanyard). That's it — no API keys needed.

**How to find your Discord ID:**
1. Open Discord Settings > Advanced > Enable **Developer Mode**
2. Right-click your profile > **Copy User ID**

### 4. Add your avatar

Place your avatar image in the `assets/` folder and update `avatarUrl` in the config. Or use any URL.

### 5. Add background music (optional)

Drop an `music.mp3` file into the `assets/` folder. Set `enableMusic: false` in config to hide the button.

### 6. Deploy

This is a static site — deploy it anywhere:

- **GitHub Pages** — Push to a repo and enable Pages in settings
- **Vercel** — `npx vercel --prod`
- **Netlify** — Drag and drop the folder
- **Cloudflare Pages** — Connect your repo

## Project Structure

```
dashboard/
├── assets/          ← Your avatar, music, etc.
├── css/
│   └── style.css    ← All styles
├── js/
│   ├── config.js    ← YOUR CONFIG (edit this)
│   ├── main.js      ← Dashboard logic
│   └── particles.js ← Particle background
├── index.html       ← Main page
└── README.md
```

## Available Tech Stack Icons

The following tech names are supported in the `techStack` config array:

`Python` · `JavaScript` · `Rust` · `Java` · `HTML` · `CSS` · `Node.js` · `Tailwind` · `Git`

## Customization

### Colors

Edit the CSS variables at the top of `css/style.css`:

```css
:root {
    --bg: #050508;
    --accent: #c4b5fd;
    --accent-bright: #a78bfa;
    /* ... */
}
```

### Adding more social links

Add entries to `CONFIG.socials` in config.js. Supported platforms: `discord`, `spotify`, `github`. To add more, you'll need to add the SVG icon to the `SOCIAL_ICONS` object in `main.js`.

## License

MIT — do whatever you want with it.
