var formContainer = document.getElementById('form-container');
var formTitle = document.getElementById('form-title');
var toggleLink = document.getElementById('toggle-link');
var submitButton = document.getElementById('submit-button');

toggleLink.addEventListener('click', () => {
    const isSignUp = formTitle.textContent === 'Sign Up';
    if (isSignUp) {
        // Switch back to login form
        formTitle.textContent = 'Login';
        document.getElementById('email').style.display = 'block';
        document.getElementById('password').style.display = 'block';
        submitButton.textContent = 'Login';
        toggleLink.textContent = "Don't have an account? Sign up";
    } else {
        // Switch to sign up form
        formTitle.textContent = 'Sign Up';
        document.getElementById('email').style.display = 'block';
        document.getElementById('password').style.display = 'block';
        submitButton.textContent = 'Sign Up';
        toggleLink.textContent = "Already have an account? Login";
        // Add Name input for SignUp
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'name';
        nameInput.placeholder = 'Enter your name';
        formContainer.insertBefore(nameInput, submitButton);
    }
});

submitButton.addEventListener('click', () => {
    const name = document.getElementById('name') ? document.getElementById('name').value : null;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (formTitle.textContent === 'Login') {
      
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (storedEmail === email && storedPassword === password) {
            alert("Login successful!");
        } else {
            alert("Incorrect email or password.");
        }
    } else {
    
        if (name && email && password) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert("Sign up successful!");
        } else {
            alert("Please fill all fields.");
        }
    }
});