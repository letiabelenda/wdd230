const url = 'https://letiabelenda.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.cards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

function displayMembers(members) {
    const display = document.querySelector('.cards');
    display.innerHTML = '';

    members.forEach(member => {
        let card;
        if (display.classList.contains('grid')) {
            // Create card elements for grid view
            card = document.createElement('div');
            card.classList.add('card-grid');

            let h2 = document.createElement('h3');
            let portrait = document.createElement('img');
            let adress = document.createElement('p');
            let phone = document.createElement('p');
            let membership = document.createElement('p');
            let website = document.createElement('a');
            let email = document.createElement('p');

            h2.textContent = member.name;
            portrait.setAttribute('src', member.image);
            portrait.setAttribute('alt', 'Image of ' + member.name + ' company');
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('height', '250px');

            card.appendChild(h2);
            card.appendChild(portrait);
            card.appendChild(adress);
            card.appendChild(phone);
            card.appendChild(membership);
            card.appendChild(website);
            card.appendChild(email);
            cards.appendChild(card);
        } else {
            // Create card elements for list view
            card = document.createElement('section');
            card.classList.add('card-list');

            let h2 = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let membership = document.createElement('p');
            let website = document.createElement('a');
            let email = document.createElement('p');

            h2.textContent = member.name;
            address.textContent = `Address: ${member.adress}`;
            phone.textContent = `Phone: ${member.phone}`;
            website.textContent = member.website;
            website.setAttribute('href', member.website)
            membership.textContent = member.membership;
            email.textContent = member['other-info'];

            card.appendChild(h2);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(membership);
            card.appendChild(website);
            card.appendChild(email);
            cards.appendChild(card);
        }

        display.appendChild(card);
    });
}

// Grid and List buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");



gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
