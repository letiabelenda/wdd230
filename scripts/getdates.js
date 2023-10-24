// Current date
const currentYear = new Date();
document.querySelector('#year').textContent = currentYear.getFullYear();

// Last modified date
const lastModified = new Date(document.lastModified);
const dayModified = lastModified.getDate();
const monthModified = lastModified.getMonth();
const yeartModified = lastModified.getFullYear();
const hourModified = lastModified.getHours();
const minutesModified = lastModified.getMinutes();
const secondsModified = lastModified.getSeconds();



const completeDateModified = `Last Modification: ${dayModified}/${monthModified}/${yeartModified} ${hourModified}:${minutesModified}:${secondsModified}`;
document.getElementById('lastModified').textContent = completeDateModified;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Number of visits
/* LocalStorage date */ 
const sidebar = document.querySelector('.sidebar');

let lastVisitDate = window.localStorage.getItem('last-visit-date');

if (!lastVisitDate) {
    // First visit
    sidebar.textContent = "Welcome! Let us know if you have any questions.";
	lastVisitDate = new Date();
    numVisits = 1;
} else {
    lastVisitDate = new Date(lastVisitDate);
    const timeDifference = currentYear - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        sidebar.textContent = "Back so soon! Awesome!";
    } else {
        const plural = daysDifference === 1 ? "" : "s";
        sidebar.textContent = `You last visited ${daysDifference} day${plural} ago.`;
    }

	numVisits = Number(window.localStorage.getItem('visits-ls')) || 0;
}

visitsDisplay.textContent = numVisits;
localStorage.setItem('visits-ls', numVisits);
localStorage.setItem('last-visit-date', currentYear);






