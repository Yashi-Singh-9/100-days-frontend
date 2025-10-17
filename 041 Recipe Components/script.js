const heartIcon = document.querySelector('.fa-heart');

heartIcon.addEventListener('click', function() {
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-solid');

    // Toggle color
    if (this.classList.contains('fa-solid')) {
        this.style.color = '#F55951';
    } else {
        this.style.color = ''; // reset to default
    }
});