document.addEventListener("DOMContentLoaded", () => {
    const closeIcon = document.querySelector(".fa-xmark");
    const closeLink = document.querySelector(".text-danger");
    const modal = document.querySelector("main");

    const closeModal = () => {
        modal.style.display = "none";
    };

    closeIcon.addEventListener("click", closeModal);
    closeLink.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
    });
});
