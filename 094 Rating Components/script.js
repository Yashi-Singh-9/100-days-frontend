const heartIcon = document.querySelector('.fa-heart');

heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('text-danger'); // Bootstrap's red color class
});