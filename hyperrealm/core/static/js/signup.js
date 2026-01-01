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

// Initialize particles for signup page
function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
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

// Multi-step form functionality
function initMultiStepForm() {
    let currentStep = 1;
    const totalSteps = 3;
    
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const currentStepSpan = document.getElementById('currentStep');
    
    const nextStep1Btn = document.getElementById('nextStep1');
    const nextStep2Btn = document.getElementById('nextStep2');
    const prevStep2Btn = document.getElementById('prevStep2');
    const prevStep3Btn = document.getElementById('prevStep3');
    const completeSignupBtn = document.getElementById('completeSignup');
    
    // Progress steps
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLines = document.querySelectorAll('.progress-line');
    
    // Update progress bar
    function updateProgressBar() {
        progressSteps.forEach((step, index) => {
            step.classList.remove('active', 'completed', 'inactive');
            if (index + 1 < currentStep) {
                step.classList.add('completed');
            } else if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.add('inactive');
            }
        });
        
        progressLines.forEach((line, index) => {
            line.classList.remove('active', 'completed');
            if (index + 1 < currentStep) {
                line.classList.add('completed');
            } else if (index + 1 === currentStep) {
                line.classList.add('active');
            }
        });
        
        currentStepSpan.textContent = currentStep;
    }
    
    // Show step
    function showStep(stepNumber) {
        step1.classList.add('hidden');
        step2.classList.add('hidden');
        step3.classList.add('hidden');
        successMessage.classList.add('hidden');
        
        if (stepNumber === 1) {
            step1.classList.remove('hidden');
        } else if (stepNumber === 2) {
            step2.classList.remove('hidden');
        } else if (stepNumber === 3) {
            step3.classList.remove('hidden');
        }
        
        currentStep = stepNumber;
        updateProgressBar();
        
        // Animate the step
        const currentStepElement = document.getElementById(`step${stepNumber}`);
        currentStepElement.style.animation = 'none';
        setTimeout(() => {
            currentStepElement.style.animation = 'slide-in 0.4s ease-out forwards';
        }, 10);
    }
    
    // Validate step 1
    function validateStep1() {
        const inputs = step1.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '';
            }
        });
        
        // Check password match
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password && confirmPassword && password !== confirmPassword) {
            showError('Passwords do not match');
            document.getElementById('confirmPassword').style.borderColor = '#ef4444';
            isValid = false;
        }
        
        // Check terms agreement
        if (!document.getElementById('terms').checked) {
            showError('You must agree to the terms and conditions');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(message) {
        errorMessage.querySelector('#errorText').textContent = message;
        errorMessage.classList.remove('hidden');
        
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 5000);
    }
    
    // Password strength checker
    function checkPasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        const strengthFill = document.getElementById('passwordStrength');
        strengthFill.className = 'password-strength-fill';
        
        if (strength === 0) {
            return 'strength-weak';
        } else if (strength === 1) {
            strengthFill.classList.add('strength-weak');
        } else if (strength === 2) {
            strengthFill.classList.add('strength-fair');
        } else if (strength === 3) {
            strengthFill.classList.add('strength-good');
        } else {
            strengthFill.classList.add('strength-strong');
        }
    }
    
    // Platform selection
   function initPlatformSelection() {
    const platformOptions = document.querySelectorAll('.platform-option');
    const platformInput = document.getElementById('platformInput'); // hidden input
    let selectedPrimaryPlatform = '';

    // Function to select a platform
    const selectPlatform = (option) => {
        const platformText = option.querySelector('p').textContent.trim();

        // Remove selection from all options
        platformOptions.forEach(opt => opt.classList.remove('selected'));

        // Highlight clicked option
        option.classList.add('selected');

        // Update selected variable
        selectedPrimaryPlatform = platformText;

        // Update hidden input in lowercase
        if (platformInput) platformInput.value = selectedPrimaryPlatform.toLowerCase();

        // Update preview if exists
        const preview = document.getElementById('previewPlatform');
        if (preview) preview.textContent = selectedPrimaryPlatform;
    };

    // Add click event to each option
    platformOptions.forEach(option => {
        option.addEventListener('click', () => selectPlatform(option));
    });

    // ✅ Set default selection (first option) if none selected
    if (platformOptions.length > 0) {
        const defaultOption = platformOptions[0];
        selectPlatform(defaultOption);
    }
}


    // Toggle password visibility
    function initPasswordToggle() {
        const toggleButtons = ['togglePassword1', 'togglePassword2'];
        
        toggleButtons.forEach(buttonId => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener('click', () => {
                    const inputId = buttonId === 'togglePassword1' ? 'password' : 'confirmPassword';
                    const passwordInput = document.getElementById(inputId);
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordInput.setAttribute('type', type);
                    
                    // Toggle icon
                    const icon = button.querySelector('.material-symbols-outlined');
                    if (type === 'text') {
                        icon.textContent = 'visibility';
                    } else {
                        icon.textContent = 'visibility_off';
                    }
                });
            }
        });
    }
    
    // Real-time password strength check
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            checkPasswordStrength(e.target.value);
        });
    }
    
    // Real-time username preview
    const usernameInput = step1.querySelector('input[placeholder="gamer_tag"]');
    const previewUsername = document.getElementById('previewUsername');
    
    if (usernameInput && previewUsername) {
        usernameInput.addEventListener('input', (e) => {
            previewUsername.textContent = e.target.value || 'gamer_tag';
        });
    }
    
    // Form navigation
    if (nextStep1Btn) {
        nextStep1Btn.addEventListener('click', () => {
            if (validateStep1()) {
                showStep(2);
            }
        });
    }
    
    if (nextStep2Btn) {
        nextStep2Btn.addEventListener('click', () => {
            showStep(3);
        });
    }
    
    if (prevStep2Btn) {
        prevStep2Btn.addEventListener('click', () => {
            showStep(1);
        });
    }
    
    if (prevStep3Btn) {
        prevStep3Btn.addEventListener('click', () => {
            showStep(2);
        });
    }
    
    // Form submission
    const signupForm = document.getElementById('signupForm');
    
    // function to get csrf token from cookies
    function getcookie(name){
        let CookieValue= null;
        if (document.cookie){
            document.cookie.split(';').forEach(cookie =>{
                cookie= cookie.trim();
                if (cookie.startsWith(name+'=')){
                    CookieValue=decodeURIComponent(cookie.slice(name.length+1))
                }
            });
        }
        return CookieValue;
    }
    const csrftoken= getcookie('csrftoken');

    if (signupForm){
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const originalText= completeSignupBtn.innerHTML;
            completeSignupBtn.innerHTML=`
            <span class="material-symbols-outlined animate-spin">sync</span>
            <span> creating your Realm.....</span>
            `;
            completeSignupBtn.disabled= true;

            try{
                // collecting data from form 
                const formdata= new FormData(signupForm);

                // calling api
                const  response= await fetch('/signup/user/',{
                    method: 'POST',
                    headers:{
                        'X-CSRFToken': csrftoken,
                        'Accept': 'application/json',
                    },
                    body: formdata
                });
                
                let data={};
                try{
                    data= await response.json();
                }catch(e){}

                if (!response.ok){
                    throw new Error(
                      data.confirm_password?.[0] ||
                      data.password?.[0] ||
                      data.username?.[0] ||
                      'signup failed'
                    );
                }

                step3.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }catch(error) {
                alert(error.message);//replace with inline error ui later
            }finally {
                completeSignupBtn.innerHTML= originalText;
                completeSignupBtn.disabled= false;
            }
        });
    }
    
    // Initialize
    updateProgressBar();
    initPlatformSelection();
    initPasswordToggle();
    
    // Social connect buttons
    const socialButtons = document.querySelectorAll('#step3 button[type="button"]');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Simulate connection
            const platform = button.querySelector('span').textContent;
            console.log(`Connecting ${platform} account...`);
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
    initMultiStepForm();
    initInteractiveBackground();
    
    console.log('Hyper Realm Signup Page loaded!');
});