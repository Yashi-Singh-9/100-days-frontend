document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll("nav ul li a");
    const cards = document.querySelectorAll(".carousel-info .info");
    const carousel = document.querySelector(".carousel-info");
    const leftArrow = document.querySelector(".fa-chevron-left");
    const rightArrow = document.querySelector(".fa-chevron-right");

    // Category filter logic
    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Update active class
            filterLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            const category = this.textContent.trim();

            cards.forEach(card => {
                const title = card.querySelector("h5").textContent.toLowerCase();

                if (category === "All") {
                    card.style.display = "block";
                } else if (
                    (category === "Photography" && title.includes("art")) ||
                    (category === "Fashion" && title.includes("balloon")) ||
                    (category === "Sculpture" && title.includes("hunt"))
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            // Optional: Change background color based on category
            const bgColors = {
                All: "#FFFFFF",
                Photography: "#fcefdc",
                Fashion: "#f0f8ff",
                Sculpture: "#e6f0ea"
            };
            document.querySelector("main").style.backgroundColor = bgColors[category] || "#FFFFFF";
        });
    });

    // Carousel arrow scroll
    const scrollAmount = 300;

    rightArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftArrow.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});