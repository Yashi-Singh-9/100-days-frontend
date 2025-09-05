document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const continueBtn = document.querySelector("button");
    const errorSpan = document.querySelector(".error");

    // Basic email or phone validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;

    continueBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const value = emailInput.value.trim();

        if (!value) {
            showError("Please enter your email or phone number.");
            return;
        }

        if (!emailRegex.test(value) && !phoneRegex.test(value)) {
            showError("Please enter a valid email or phone number.");
            return;
        }

        // Clear error if validation passes
        errorSpan.textContent = "";
        emailInput.classList.remove("border-danger");

        // Simulate form processing (e.g., redirect, show message)
        alert("Proceeding with: " + value);
    });

    function showError(message) {
        errorSpan.textContent = message;
        emailInput.classList.add("border-danger");
    }
});
