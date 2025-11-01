document.addEventListener("DOMContentLoaded", () => {
    const errorCard = document.querySelectorAll(".cards")[0];
    const successCard = document.querySelectorAll(".cards")[1];
    const tryAgainButton = errorCard.querySelector("button");
  
    // Initial state: show error, hide success
    errorCard.style.display = "block";
    successCard.style.display = "none";
  
    // Handle 'Try Again' button click
    tryAgainButton.addEventListener("click", () => {
      // Hide error, show success
      errorCard.style.display = "none";
      successCard.style.display = "block";
    });
  });
  