document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                showSuccessMessage(event);
            }
        }, false);
    });

    // Toggle password visibility
    const passwordFields = document.querySelectorAll("input[type='password']");
    passwordFields.forEach(function(passwordField) {
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Show";
        toggleButton.type = "button";
        passwordField.parentNode.insertBefore(toggleButton, passwordField.nextSibling);

        toggleButton.addEventListener("click", function() {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleButton.textContent = "Hide";
            } else {
                passwordField.type = "password";
                toggleButton.textContent = "Show";
            }
        });
    });
});

// Function to show a success message on form submission
function showSuccessMessage(event) {
    event.preventDefault();
    const formType = event.target.getAttribute('data-form-type');
    let message = "Form submitted successfully!";

    switch(formType) {
        case "signup":
            message = "Sign up successful!";
            break;
        case "login":
            message = "Log in successful!";
            break;
        case "contact":
            message = "Message sent successfully!";
            break;
    }

    alert(message);

    // Optionally, you can proceed with the form submission
    // event.target.submit();

    return false;
}
