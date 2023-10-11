// Store added chapters
const addedItems = new Set();

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue !== '') {
        if (!addedItems.has(inputValue)) {
            addChapter(inputValue);
        } else {
            window.alert('Chapter already added! ⚠️');
        }
    } else {
        window.alert('Please, write something! 👇');
    }
});

function addChapter(chapterTitle) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapterTitle;
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        // Remove the chapter from the set
        addedItems.delete(chapterTitle);
        input.focus();
    });

    // Add chapter to the set
    addedItems.add(chapterTitle);

    input.focus();
    input.value = '';
}