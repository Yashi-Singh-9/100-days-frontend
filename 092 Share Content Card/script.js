const shareLinks = document.querySelectorAll('.share-content a i');

shareLinks.forEach(link => {
    link.addEventListener('click', () => {
        shareLinks.forEach(el => el.classList.remove('selected')); // Remove selected class from all
        link.classList.add('selected'); // Add selected class to the clicked one
    });
});

const copySection = document.querySelector('.copy');
const linkText = copySection.querySelector('.link').textContent;
const copyButton = copySection.querySelector('.copied');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(linkText).then(() => {
        copyButton.innerHTML = 'Copied to Clipboard'; 
        setTimeout(() => {
            copyButton.innerHTML = 'Copy to clipboard';
        }, 1000);
    });
});