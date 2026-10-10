const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.getElementById('notesContainer');

addBtn.addEventListener('click', function () {
    const text = noteInput.value;

    const noteEl = document.createElement('div');
    noteEl.className = 'note';
    noteEl.textContent = text;
    notesContainer.appendChild(noteEl);
    noteInput.value = '';
});

