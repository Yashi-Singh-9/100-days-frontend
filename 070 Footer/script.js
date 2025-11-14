// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const signUpButton = document.querySelector(".input button");
    const errorSpan = document.querySelector(".error");

    // Function to validate email format using regex
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Event listener for the button click
    signUpButton.addEventListener("click", () => {
        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            errorSpan.textContent = "Email address is required.";
            errorSpan.style.color = "#FF6B6B";
        } else if (!isValidEmail(emailValue)) {
            errorSpan.textContent = "Please enter a valid email address.";
            errorSpan.style.color = "#FF6B6B";
        } else {
            errorSpan.textContent = "Thanks for subscribing!";
            errorSpan.style.color = "#B8E986";
            // Optionally clear input
            emailInput.value = "";
        }
    });
});
