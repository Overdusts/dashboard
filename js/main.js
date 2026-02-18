// ── Apply Config ───────────────────────────
document.title = CONFIG.username;
document.querySelector('meta[property="og:title"]').content = CONFIG.username;
document.querySelector('meta[property="og:url"]').content = CONFIG.siteUrl;
document.getElementById('displayUsername').textContent = CONFIG.username;
document.getElementById('displayRealName').textContent = CONFIG.realName;
document.getElementById('displayBio').textContent = CONFIG.bio;
document.getElementById('avatar').src = CONFIG.avatarUrl;
document.getElementById('footerText').textContent = CONFIG.footerText;

// ── Social Links (dynamic from config) ─────
const SOCIAL_ICONS = {
    discord: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
};

const ARROW_SVG = '<svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';

(function buildSocialLinks() {
    const container = document.getElementById('socialLinks');
    Object.entries(CONFIG.socials).forEach(([platform, url]) => {
        if (!url) return;
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = `social-link ${platform}`;
        a.innerHTML = `${SOCIAL_ICONS[platform] || ''}
            <span>${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
            ${ARROW_SVG}`;
        container.appendChild(a);
    });
})();

// ── Tech Stack (dynamic from config) ───────
const TECH_ICONS = {
    Python: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v.62H6.34l-.05.01-.03.01H6.19l-.07.04-.05.05-.05.08-.03.09-.02.11.01.13.03.13.05.12.09.1.11.08.13.06.15.03h8.36l.71-.04.62-.12.53-.21.45-.29.35-.35.28-.4.2-.45.14-.48.1-.5.05-.51.02-.49V5.35l-.01-.24-.03-.2-.04-.17-.06-.15-.08-.12-.1-.1-.11-.08-.12-.07-.14-.05-.14-.04-.15-.02-.14-.01H7.93l-.71.04-.62.12-.53.21-.45.29-.35.35-.28.4-.2.45-.14.48-.1.5-.05.51-.02.49v1.53H2.19l-.21.03-.28.07-.32.12-.35.18-.36.26-.36.36-.35.46-.32.59-.28.73-.21.88-.14 1.05L0 16.22l.06 1.22.16 1.04.24.86.32.71.36.57.4.44.42.33.42.24.4.16.36.1.32.05.24.02h5.1v-3.06l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h7.97l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V8.49l.03-.33.07-.34.12-.33.17-.3.22-.27.26-.23.3-.18.32-.13.33-.08.33-.04h.13l7.19.01v3.06z"/></svg>',
    JavaScript: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
    Rust: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#fff" d="M23.834 11.658l-1.168-.585a.844.844 0 00-.065-.24l.68-1.044a.369.369 0 00-.054-.433l-.108-.108a12.05 12.05 0 00-.864-.864l-.108-.108a.369.369 0 00-.433-.054l-1.044.68a.847.847 0 00-.24-.065l-.585-1.168a.369.369 0 00-.331-.197h-.153a12.07 12.07 0 00-1.222 0h-.153a.369.369 0 00-.331.197l-.585 1.168a.844.844 0 00-.24.065l-1.044-.68a.369.369 0 00-.433.054l-.108.108c-.291.277-.578.564-.864.864l-.108.108a.369.369 0 00-.054.433l.68 1.044a.847.847 0 00-.065.24l-1.168.585a.369.369 0 00-.197.331v.153c-.008.408-.008.814 0 1.222v.153a.369.369 0 00.197.331l1.168.585c.014.082.036.162.065.24l-.68 1.044a.369.369 0 00.054.433l.108.108c.286.3.573.587.864.864l.108.108a.369.369 0 00.433.054l1.044-.68c.078.029.158.051.24.065l.585 1.168a.369.369 0 00.331.197h.153c.408.008.814.008 1.222 0h.153a.369.369 0 00.331-.197l.585-1.168a.844.844 0 00.24-.065l1.044.68a.369.369 0 00.433-.054l.108-.108c.3-.277.587-.564.864-.864l.108-.108a.369.369 0 00.054-.433l-.68-1.044c.029-.078.051-.158.065-.24l1.168-.585a.369.369 0 00.197-.331v-.153c.008-.408.008-.814 0-1.222v-.153a.369.369 0 00-.197-.331zM12 15.956a3.956 3.956 0 110-7.912 3.956 3.956 0 010 7.912z"/></svg>',
    Java: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#ED8B00" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627"/></svg>',
    HTML: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.747.086-.988.003-.042H6.741l.602 6.932h7.891l-.333 3.72-2.92.818-2.935-.81-.188-2.11H6.765l.37 4.155L12 20.064l4.877-1.351L17.544 10H8.532z"/></svg>',
    CSS: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.12-1.423.957-10.59-.39.004z"/></svg>',
    'Node.js': '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#339933" d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.28.28 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.284.284 0 00-.139.241v10.15a.27.27 0 00.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.854 1.854 0 01-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.242a1.924 1.924 0 011.846 0l8.794 5.076c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 01-.924 1.604l-8.794 5.078c-.28.163-.6.247-.923.247z"/></svg>',
    Tailwind: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#06B6D4" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>',
    Git: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.645-.222 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>',
};

(function buildTechStack() {
    const container = document.getElementById('techStack');
    CONFIG.techStack.forEach(tech => {
        if (!TECH_ICONS[tech]) return;
        const div = document.createElement('div');
        div.className = 'tech-item';
        div.setAttribute('data-name', tech);
        div.innerHTML = TECH_ICONS[tech];
        container.appendChild(div);
    });
})();

// ── Cursor Effects ─────────────────────────
const cursorGlow = document.getElementById('cursorGlow');
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    cursorGlow.classList.add('active');
});

document.addEventListener('mousedown', () => {
    cursorDot.classList.add('clicking');
    createSparkles(mouseX, mouseY);
});
document.addEventListener('mouseup', () => cursorDot.classList.remove('clicking'));

document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('active');
});

function animateCursor() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

function createSparkles(x, y) {
    const count = 6 + Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const distance = 20 + Math.random() * 30;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        sparkle.style.width = (2 + Math.random() * 3) + 'px';
        sparkle.style.height = sparkle.style.width;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
    }
}

// ── Fade In Animation ──────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}, 100);

// ── Music Toggle ───────────────────────────
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const musicOn = document.getElementById('musicOn');
const musicOff = document.getElementById('musicOff');

if (CONFIG.enableMusic && musicToggle && bgMusic) {
    musicToggle.style.display = 'flex';
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.volume = 0.3;
            bgMusic.play().then(() => {
                musicToggle.classList.add('playing');
                musicOn.style.display = 'block';
                musicOff.style.display = 'none';
            }).catch(() => {});
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            musicOn.style.display = 'none';
            musicOff.style.display = 'block';
        }
    });
}

// ── Lanyard (Discord Live Status) ──────────
function connectLanyard() {
    if (!CONFIG.discordId || CONFIG.discordId === 'YOUR_DISCORD_ID') return;

    const ws = new WebSocket('wss://api.lanyard.rest/socket');

    ws.onopen = () => {
        ws.send(JSON.stringify({
            op: 2,
            d: { subscribe_to_id: CONFIG.discordId }
        }));
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.op === 1) {
            setInterval(() => {
                ws.send(JSON.stringify({ op: 3 }));
            }, data.d.heartbeat_interval);
        }

        if (data.op === 0) {
            updatePresence(data.d);
        }
    };

    ws.onclose = () => {
        setTimeout(connectLanyard, 5000);
    };

    ws.onerror = () => {
        ws.close();
    };
}

function updatePresence(data) {
    const indicator = document.getElementById('statusIndicator');
    const statusMessage = document.getElementById('statusMessage');
    const statusEmoji = document.getElementById('statusEmoji');
    const avatar = document.getElementById('avatar');

    const status = data.discord_status;
    indicator.className = 'status-indicator ' + status;

    if (data.discord_user && data.discord_user.avatar) {
        const avatarUrl = `https://cdn.discordapp.com/avatars/${CONFIG.discordId}/${data.discord_user.avatar}?size=256`;
        avatar.src = avatarUrl;
    }

    if (data.activities) {
        const customStatus = data.activities.find(a => a.type === 4);
        if (customStatus) {
            statusEmoji.textContent = customStatus.emoji ? (customStatus.emoji.name || '') : '';
            statusMessage.textContent = customStatus.state || getStatusText(status);
        } else {
            statusEmoji.textContent = '';
            statusMessage.textContent = getStatusText(status);
        }
    } else {
        statusEmoji.textContent = '';
        statusMessage.textContent = getStatusText(status);
    }

    updateSpotify(data);
    updateActivity(data);
}

function getStatusText(status) {
    const texts = {
        online: 'Online',
        idle: 'Idle',
        dnd: 'Do Not Disturb',
        offline: 'Offline'
    };
    return texts[status] || 'Offline';
}

function updateSpotify(data) {
    const card = document.getElementById('spotifyCard');
    const spotify = data.spotify;

    if (!spotify) {
        card.style.display = 'none';
        return;
    }

    card.style.display = 'block';
    document.getElementById('spotifyAlbum').src = spotify.album_art_url;
    document.getElementById('spotifySong').textContent = spotify.song;
    document.getElementById('spotifyArtist').textContent = spotify.artist.replaceAll(';', ',');
    document.getElementById('spotifyAlbumName').textContent = spotify.album;

    const now = Date.now();
    const start = spotify.timestamps.start;
    const end = spotify.timestamps.end;
    const elapsed = now - start;
    const total = end - start;
    const progress = Math.min((elapsed / total) * 100, 100);

    document.getElementById('spotifyBar').style.width = progress + '%';
    document.getElementById('spotifyElapsed').textContent = formatTime(elapsed);
    document.getElementById('spotifyTotal').textContent = formatTime(total);
}

function updateActivity(data) {
    const card = document.getElementById('activityCard');
    const activities = data.activities;

    if (!activities) {
        card.style.display = 'none';
        return;
    }

    const activity = activities.find(a => a.type === 0);

    if (!activity) {
        card.style.display = 'none';
        return;
    }

    card.style.display = 'block';

    const typeText = document.getElementById('activityType');
    typeText.textContent = 'PLAYING';

    document.getElementById('activityName').textContent = activity.name;
    document.getElementById('activityDetails').textContent = activity.details || '';
    document.getElementById('activityState').textContent = activity.state || '';

    const activityImage = document.getElementById('activityImage');
    if (activity.assets && activity.assets.large_image) {
        let imgUrl = activity.assets.large_image;
        if (imgUrl.startsWith('mp:external/')) {
            imgUrl = 'https://media.discordapp.net/external/' + imgUrl.slice(12);
        } else if (activity.application_id) {
            imgUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${imgUrl}.png`;
        }
        activityImage.src = imgUrl;
        activityImage.style.display = 'block';
    } else {
        activityImage.style.display = 'none';
    }
}

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

setInterval(() => {
    const card = document.getElementById('spotifyCard');
    if (card.style.display !== 'none') {
        const bar = document.getElementById('spotifyBar');
        const currentWidth = parseFloat(bar.style.width) || 0;
        if (currentWidth < 100) {
            bar.style.width = (currentWidth + 0.05) + '%';
        }
    }
}, 50);

// ── GitHub Projects ────────────────────────
const LANG_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Rust: '#dea584',
    Go: '#00ADD8',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Shell: '#89e051',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Lua: '#000080',
    Kotlin: '#A97BFF',
    Swift: '#F05138',
    Dart: '#00B4AB'
};

function fetchGitHubProjects() {
    if (!CONFIG.githubUsername || CONFIG.githubUsername === 'YourGitHubUsername') return;

    fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=6&type=owner`)
        .then(res => res.json())
        .then(repos => {
            const grid = document.getElementById('projectsGrid');
            grid.innerHTML = '';

            const filtered = repos
                .filter(r => !r.fork)
                .slice(0, 6);

            if (filtered.length === 0) {
                grid.innerHTML = '<p style="color: var(--text-dim); font-size: 0.75rem; grid-column: 1/-1; text-align: center;">No projects yet</p>';
                return;
            }

            filtered.forEach(repo => {
                const card = document.createElement('a');
                card.href = repo.html_url;
                card.target = '_blank';
                card.rel = 'noopener noreferrer';
                card.className = 'project-card';

                const langColor = LANG_COLORS[repo.language] || '#8b8b8b';

                card.innerHTML = `
                    <div class="project-name">${repo.name}</div>
                    <div class="project-desc">${repo.description || 'No description'}</div>
                    <div class="project-meta">
                        ${repo.language ? `<span class="project-lang"><span class="lang-dot" style="background:${langColor}"></span>${repo.language}</span>` : ''}
                        ${repo.stargazers_count > 0 ? `<span class="project-stars"><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>${repo.stargazers_count}</span>` : ''}
                    </div>
                `;

                grid.appendChild(card);
            });
        })
        .catch(() => {
            const grid = document.getElementById('projectsGrid');
            grid.innerHTML = '<p style="color: var(--text-dim); font-size: 0.75rem; grid-column: 1/-1; text-align: center;">Failed to load projects</p>';
        });
}

connectLanyard();
fetchGitHubProjects();
