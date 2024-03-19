document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Fetching input values
        const username = document.getElementById('usernameReg').value;
        const password = document.getElementById('passwordReg').value;

        // Password validation
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (/^\d+$/.test(password)) {
            alert('Password must contain at least one non-numeric character.');
            return;
        }

        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            alert('Password must contain both uppercase and lowercase characters.');
            return;
        }

        

        // If all validations pass, you can proceed with registration
        alert('Registration successful!');
        logForm.style.display = "block";
		regForm.style.display = "none";
        // Here, you might want to send the form data to your backend for further processing

        // Optionally, you can clear the form fields after successful registration
        registrationForm.reset();


    });
});