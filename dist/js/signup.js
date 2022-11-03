// Signup form 
const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(`Try again!
            You must have a username.
            Your email must be valid (i.e. something@anything.com)
            Password must be 8 or more characters`)
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
