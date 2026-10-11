const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.getElementById('notesContainer');

addBtn.addEventListener('click', function () {
    const text = noteInput.value;

    const noteEl = document.createElement('div');
    noteEl.className = 'note';

    const textEl = document.createElement('div');
    textEl.className = 'note-text';
    textEl.textContent = text;

    const actionsEl = document.createElement('div');
    actionsEl.className = 'note-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';

    notesContainer.appendChild(noteEl);

    noteEl.appendChild(textEl);
    noteEl.appendChild(actionsEl);

    actionsEl.appendChild(editBtn);
    actionsEl.appendChild(deleteBtn);

    noteInput.value = '';
});

