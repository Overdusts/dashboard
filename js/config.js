/*
 * ═══════════════════════════════════════════
 *  DASHBOARD CONFIGURATION
 *  Edit the values below to personalize
 *  your dashboard. This is the ONLY file
 *  you need to modify.
 * ═══════════════════════════════════════════
 */

const CONFIG = {

    // ── Your Identity ──────────────────────
    username: 'YourUsername',
    realName: 'Your Name',
    bio: 'Your bio goes here. Tell the world about yourself.',
    siteUrl: 'https://yourdomain.com',
    avatarUrl: 'assets/avatar.png', // Place your avatar image in the assets/ folder

    // ── Discord (Lanyard Integration) ──────
    // Your Discord user ID (needed for live status, Spotify, activity)
    // To find your Discord ID: Enable Developer Mode in Discord settings,
    // then right-click your profile and click "Copy User ID"
    discordId: 'YOUR_DISCORD_ID',

    // ── GitHub ─────────────────────────────
    // Your GitHub username (used to fetch and display your repos)
    githubUsername: 'YourGitHubUsername',

    // ── Social Links ───────────────────────
    // Set a link to '' (empty string) to hide it
    socials: {
        discord: 'https://discord.com/users/YOUR_DISCORD_ID',
        spotify: 'https://open.spotify.com/user/YOUR_SPOTIFY_ID',
        github: 'https://github.com/YourGitHubUsername',
    },

    // ── Background Music (Optional) ────────
    // Place an mp3 file at assets/music.mp3 to enable the music toggle
    // Set to false to disable the music button entirely
    enableMusic: true,

    // ── Tech Stack ─────────────────────────
    // Add or remove items. Each entry needs: name, svg (icon markup), color
    // You can grab SVG icons from https://simpleicons.org
    techStack: [
        'Python', 'JavaScript', 'Rust', 'Java',
        'HTML', 'CSS', 'Node.js', 'Tailwind', 'Git'
    ],

    // ── Footer ─────────────────────────────
    footerText: '© 2026 YourUsername',
};
