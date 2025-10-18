document.addEventListener("DOMContentLoaded", () => {
    const icon = document.querySelector(".icon");
    const cardSection = document.querySelector(".cards");

    icon.addEventListener("click", () => {
        cardSection.classList.toggle("d-none");
    });
});
