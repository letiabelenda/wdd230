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