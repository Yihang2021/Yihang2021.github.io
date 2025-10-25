function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const parentTag = el.parentElement.tagName;
        const elTag = el.tagName;

        if (el.getAttribute('data-lang') === lang) {
            if (elTag === 'LI') {
                el.style.display = 'list-item';
            } else if (elTag === 'SPAN' && parentTag === 'DIV') {
                el.style.display = 'inline';
            } else {
                el.style.display = '';
            }
        } else {
            el.style.display = 'none';
        }
    });

    document.querySelectorAll('.language-switch button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.language-switch button[onclick="switchLanguage('${lang}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the main page or a sub-page and set the initial language
    if (document.querySelector('.profile-section')) {
        switchLanguage('en');
    } else {
        // For sub-pages, you might want to detect language differently or default to one
        switchLanguage('en');
    }
    
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return; // Don't run particle animation if canvas is not present

    const ctx = canvas.getContext('2d');
    let meteors = [];
    let stars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = [];
        createStars();
    }
    window.addEventListener('resize', resizeCanvas);

    const meteorConfig = {
        count: 5,
        colors: [ // Adjusted to be more blue
            '#81D4FA', // Sky Blue
            '#4FC3F7', // Bright Blue
            '#29B6F6', // Lighter Blue
            '#03A9F4', // Material Blue
            '#B3E5FC'  // Light Blue
        ]
    };
    
    const starConfig = {
        count: 200,
        minSize: 0.5,
        maxSize: 2,
        twinkleSpeed: 0.05
    };

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * (starConfig.maxSize - starConfig.minSize) + starConfig.minSize;
            this.opacity = Math.random();
            this.dOpacity = (Math.random() * starConfig.twinkleSpeed) - (starConfig.twinkleSpeed / 2);
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }

        update() {
            this.opacity += this.dOpacity;
            if (this.opacity <= 0 || this.opacity >= 1) {
                this.dOpacity *= -1;
            }
        }
    }

    class Meteor {
        constructor() {
            this.isActive = false;
            setTimeout(() => {
                this.reset();
                this.isActive = true;
            }, Math.random() * 5000);
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() * 3) + 4;
            this.size = (Math.random() * 2) + 1.5; // Slightly larger for visibility
            this.color = meteorConfig.colors[Math.floor(Math.random() * meteorConfig.colors.length)];
            this.tailLength = Math.random() * 15 + 10;
        }

        update() {
            if (!this.isActive) return;

            this.x += this.vx;
            this.y += this.vy;

            if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
                this.isActive = false;
                setTimeout(() => {
                    this.reset();
                    this.isActive = true;
                }, Math.random() * 7000 + 3000);
            }
        }

        draw() {
            if (!this.isActive) return;
            
            ctx.save();
            
            // Draw the trail
            const gradient = ctx.createLinearGradient(this.x, this.y, this.x - this.vx * this.tailLength, this.y - this.vy * this.tailLength);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, `rgba(179, 229, 252, 0)`);

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.vx * this.tailLength, this.y - this.vy * this.tailLength);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.size;
            ctx.stroke();

            // Draw the glowing head
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 20;
            ctx.fill();
            
            ctx.restore();
        }
    }

    function createStars() {
        for (let i = 0; i < starConfig.count; i++) {
            stars.push(new Star());
        }
    }

    function createMeteors() {
        for (let i = 0; i < meteorConfig.count; i++) {
            meteors.push(new Meteor());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.update();
            star.draw();
        });

        meteors.forEach(meteor => {
            meteor.update();
            meteor.draw();
        });

        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    createStars();
    createMeteors();
    animate();
});

function updateVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    if (!countElement) return;

    const namespace = 'yihang-xing-page';
    const key = 'visitors';
    const apiUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            countElement.textContent = data.value;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            countElement.textContent = 'N/A';
        });
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);

// Improved visitor count fetch with better error handling and local fallback
async function updateVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    if (!countElement) return;

    // If page is opened via file:// some browsers or extensions may block network requests.
    if (location && location.protocol === 'file:') {
        console.warn('Page loaded via file:// — network requests for third-party APIs may be blocked. Serve site via a local web server for accurate visitor counts.');
    }

    const namespace = 'yihang-xing-page';
    const key = 'visitors';
    const apiUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data && typeof data.value === 'number') {
            countElement.textContent = data.value;
            return;
        } else {
            throw new Error('Unexpected API response: ' + JSON.stringify(data));
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);

        // Fallback: use localStorage-based counter for local testing. This is NOT a global visitor counter,
        // but helps to verify the UI and prevents showing N/A during offline/local testing.
        try {
            const localKey = 'visitor-count-local';
            let localCount = parseInt(localStorage.getItem(localKey) || '0', 10);
            if (isNaN(localCount)) localCount = 0;
            localCount += 1;
            localStorage.setItem(localKey, String(localCount));
            countElement.textContent = `${localCount} (local)`;
        } catch (e) {
            // If even localStorage fails (private mode etc.), fall back to N/A
            console.error('Local fallback failed:', e);
            countElement.textContent = 'N/A';
        }
    }
}
