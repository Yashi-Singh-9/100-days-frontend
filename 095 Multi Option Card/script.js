const optionDivs = document.querySelectorAll('.options > div');

optionDivs.forEach(div => {
    div.addEventListener('click', () => {
        // If this one is already selected, remove the selection
        if (div.classList.contains('selected')) {
            div.classList.remove('selected');
        } else {
            // Deselect all others
            optionDivs.forEach(d => d.classList.remove('selected'));
            // Select the clicked one
            div.classList.add('selected');
        }
    });
});