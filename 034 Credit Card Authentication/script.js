document.addEventListener("DOMContentLoaded", () => {
    const cardOne = document.querySelector(".card-one");
    const cardTwo = document.querySelector(".card-two");
    const authButton = document.querySelector(".card-two button");
  
    // Initially hide card two
    cardTwo.style.opacity = "0";
    cardTwo.style.display = "none";
    cardTwo.style.transition = "opacity 0.5s ease";
  
    // Transition: hide card one, show card two after 1 second
    setTimeout(() => {
      // Hide card one
      cardOne.style.opacity = "0";
      cardOne.style.transition = "opacity 0.5s ease";
  
      // Wait for fade out
      setTimeout(() => {
        cardOne.style.display = "none";
  
        // Show card two
        cardTwo.style.display = "block";
        setTimeout(() => {
          cardTwo.style.opacity = "1";
        }, 50);
      }, 500);
    }, 1000);
  
    // Button click event
    authButton.addEventListener("click", () => {
      authButton.disabled = true;
      authButton.textContent = "Authenticating...";
  
      // Simulate authentication delay
      setTimeout(() => {
        cardTwo.innerHTML = `
          <h5 class="text-center">✅ Successfully Authenticated!</h5>
        `;
      }, 2000);
    });
  });
  