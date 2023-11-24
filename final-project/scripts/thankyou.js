document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        thankYouMessage.style.display = 'block';

        setTimeout(function () {
            thankYouMessage.style.display = 'none';
        }, 3000);

        form.reset();
    });
});