
// Enhanced background animation
const style = document.createElement('style');
style.textContent = `
            @keyframes stream-flow {
                0% {
                    top: -100%;
                    opacity: 0;
                }
                10% {
                    opacity: 0.2;
                }
                90% {
                    opacity: 0.2;
                }
                100% {
                    top: 100%;
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Initialize particles for login page
function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite linear`;

        const colors = [
            'rgba(0, 243, 255, 0.5)',
            'rgba(185, 103, 255, 0.5)',
            'rgba(0, 102, 255, 0.5)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

        container.appendChild(particle);
    }
}

// Toggle password visibility
function initPasswordToggle() {
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle icon
            const icon = toggleBtn.querySelector('.material-symbols-outlined');
            if (type === 'text') {
                icon.textContent = 'visibility';
            } else {
                icon.textContent = 'visibility_off';
            }
        });
    }
}

// Form input effects
function initFormEffects() {
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"], input[type="text"]');

    inputs.forEach(input => {
        // Add glow effect on focus
        input.addEventListener('focus', () => {
            const parent = input.parentElement;
            const border = parent.querySelector('.neon-border');
            if (border) {
                border.style.opacity = '1';
            }
        });

        // Remove glow effect on blur
        input.addEventListener('blur', () => {
            const parent = input.parentElement;
            const border = parent.querySelector('.neon-border');
            if (border) {
                border.style.opacity = '0';
            }
        });

        // Add typing animation effect
        input.addEventListener('input', () => {
            if (input.value.length > 0) {
                input.style.boxShadow = '0 0 10px rgba(0, 243, 255, 0.2)';
            } else {
                input.style.boxShadow = '';
            }
        });
    });
}

// Form submission
function initFormSubmission() {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const email = formData.get('email');
            const password = formData.get('password');
            const remember = formData.get('remember');
            const twoFactor = formData.get('twoFactor');

            // Simple validation
            if (!email || !password) {
                showError('Please fill in all required fields');
                return;
            }

            if (!validateEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }

            // Simulate login process
            login(email, password);
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(message) {
        errorText.textContent = message;
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('flex');

        // Auto hide after 5 seconds
        setTimeout(() => {
            errorMessage.classList.add('hidden');
            errorMessage.classList.remove('flex');
        }, 5000);
    }

    async function login(email, password){
        // show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
                    <span class="material-symbols-outlined material-icons-fix animate-spin">sync</span>
                    <span>Authenticating...</span>
                `;
        submitBtn.disabled = true;

        try {
            const response = await fetch('/login/user',{
                method: 'POST',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({email,password}),
            });

            const data = await response.json();
            console.log(data);

            if (!response.ok){
                throw new Error(data.detail || 'Login failed');
            }

            // store jwt token
            localStorage.setItem('access',data.access);
            localStorage.setItem('refresh',data.refresh);

            // Show success animation
            submitBtn.innerHTML = `
                        <span class="material-symbols-outlined material-icons-fix">check_circle</span>
                        <span>Login Successful!</span>
                     `;
            submitBtn.classList.remove('from-neon-cyan', 'to-neon-blue');
            submitBtn.classList.add('from-green-500', 'to-emerald-600');

            window.location.href= window.HOMEURL

        }catch (error){
            console.error(error)
              // Show error
                showError('Invalid email or password. Please try again.');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
        }
    }
}

// Social login buttons
function initSocialLogin() {
    const socialButtons = document.querySelectorAll('button[type="button"]');

    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);

            // Show notification
            const platform = button.querySelector('i').className.includes('google') ? 'Google' :
                button.querySelector('i').className.includes('steam') ? 'Steam' : 'Discord';

            console.log(`${platform} login clicked`);
            // In real implementation, this would trigger OAuth flow
        });
    });
}

// Interactive background effect
function initInteractiveBackground() {
    const shapes = document.querySelectorAll('.floating-shape');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = 0.3 + (index * 0.1);
            const moveX = (x - 0.5) * 15 * speed;
            const moveY = (y - 0.5) * 15 * speed;

            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Add floating animation for particles
function addFloatingAnimation() {
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
                @keyframes float {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() * 100 - 50}px, -100vh) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(floatStyle);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    addFloatingAnimation();
    initPasswordToggle();
    initFormEffects();
    initFormSubmission();
    initSocialLogin();
    initInteractiveBackground();

    console.log('Hyper Realm Login Page loaded!');
});
