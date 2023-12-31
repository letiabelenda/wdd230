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
function toggleMenu() {
    document.getElementById("navigationLinks").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;


 // Number of visits
 const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit! 🎉`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

/* LocalStorage date*/
 
const sidebar = document.querySelector('#sidebar');

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
