const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Store added chapters
const addedItems = new Set();

button.addEventListener('click', () => {
    if (input.value !== '') {
        // Check if the item is already added
        if (!addedItems.has(input.value)) {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;
            deleteButton.textContent = '❌';

            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
                // Remove the chapter from the set
                addedItems.delete(input.value);
            });

            // Add chapter to the set
            addedItems.add(input.value);

            input.focus();
            input.value = '';
        } else {
            window.alert('Chapter already added! ⚠️');
        }
    } else {
        window.alert('Please, write something! 👇');
    }
});