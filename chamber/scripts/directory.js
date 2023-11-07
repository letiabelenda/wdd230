const url = 'https://letiabelenda.github.io/wdd230/chamber/scripts/members.json';
const cards = document.querySelector('cards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

function displayMembers(members) {
    //Create card elements
    let card = document.createElement('section');
    let h2 = document.createElement('h3');
    let portrait = document.createElement('img');4
    let adress = document.createElement('p');
    let phone = document.createElement('p');
    let membership = document.createElement('p');
    let website = document.createElement('a');
    let email = document.createElement('p');

    // Company name
    h2.textContent = members.name;

    //Image
    portrait.setAttribute('src', members.image);
    portrait.setAttribute('alt', 'Image of' + members.name + 'company');
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('height', '250px');

    //Information
    adress.textContent = members.adress;
    phone.textContent = members.phone;
    website.textContent = members.website;
    membership.textContent = members.membership;
    email.textContent = members.other-info;

    //Add the card with the elements
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(membership);
    card.appendChild(website);
    card.appendChild(email);

    document.querySelector('article.cards').appendChild(card);
}

// Grid and List buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
