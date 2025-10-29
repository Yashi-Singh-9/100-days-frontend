document.addEventListener("DOMContentLoaded", () => {
    const resetSection = document.querySelectorAll(".cards")[0];
    const successSection = document.querySelectorAll(".cards")[1];
    const resetButton = resetSection.querySelector("button");
    const loginButton = successSection.querySelector("button");
  
    const newPasswordInput = document.getElementById("new");
    const confirmPasswordInput = document.getElementById("confirm");
  
    // Create error message element and insert above the button
    const errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
  
    // Insert the error message before the reset button
    resetSection.insertBefore(errorMessage, resetButton);
  
    // Initially hide the success message
    successSection.style.display = "none";
  
    // Handle password reset button click
    resetButton.addEventListener("click", () => {
      const newPassword = newPasswordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      if (!newPassword || !confirmPassword) {
        showError("Please fill in both password fields.");
        return;
      }
  
      if (newPassword !== confirmPassword) {
        showError("Passwords do not match. Please try again.");
        return;
      }
  
      // If successful, clear error, switch sections
      errorMessage.textContent = "";
      resetSection.style.display = "none";
      successSection.style.display = "block";
    });
  
    // Show error messages inline above the button
    function showError(message) {
      errorMessage.textContent = message;
    }
  
    // Handle login button click
    loginButton.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  });
  