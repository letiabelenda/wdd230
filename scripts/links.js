const linksURL = "https://letiabelenda.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }

function displayLinks(weeks) {
  const lessonList = document.getElementById("container");

  weeks.lessons.forEach(week => {
    const weekElement = document.createElement("div");
    weekElement.className = "week";

    const weekTitle = document.createElement("h4");
    weekTitle.textContent = "Week " + week.lesson;

    const linksList = document.createElement("ul");

    week.links.forEach(link => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = link.url;
      linkAnchor.textContent = link.title;

      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekElement.appendChild(weekTitle);
    weekElement.appendChild(linksList);
    lessonList.appendChild(weekElement);
  });
}

getLinks();