const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.getElementById('notesContainer');

//const STORAGE_KEY = 'notes_data';
let notes = [];

function saveNotes() {
    localStorage.setItem('myStorage', JSON.stringify(notes));
};

function loadNotes() {
    const data = localStorage.getItem('myStorage');
    return data ? JSON.parse(data) : [];
};

function renderNote(note) {
    const noteEl = document.createElement('div'); // блок/элемент заметки
    noteEl.className = 'note';
    noteEl.dataset.id = note.id;   

    const textEl = document.createElement('div'); // текст в заметке
    textEl.className = 'note-text';
    textEl.textContent = note.text;

    const actionsEl = document.createElement('div'); // кнопки в блоке заметки
    actionsEl.className = 'note-actions';

    const editBtn = document.createElement('button'); // кнопка "редактировать"
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';

    editBtn.addEventListener('click', function() {
        textEl.style.display = 'none';
        actionsEl.style.display = 'none';

        const textarea = document.createElement('textarea'); // textarea для нового текста
        textarea.className = 'edit-textarea';
        textarea.value = textEl.textContent;

        const editActions = document.createElement('div'); //блок с кнопками
        editActions.className = 'edit-actions';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Сохранить';

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Отмена';

        editActions.appendChild(saveBtn);
        editActions.appendChild(cancelBtn);

        noteEl.appendChild(textarea);
        noteEl.appendChild(editActions);

        cancelBtn.addEventListener('click', function() {
            textEl.style.display = '';
            actionsEl.style.display = '';
            textarea.remove();
            editActions.remove();
        });

        saveBtn.addEventListener('click', function () {
            const newText = textarea.value; // редактированный текст в заметке
            const target = notes.find(n => n.id === note.id);
            if (target) {
                target.text = newText;
            };
            saveNotes();

            textEl.textContent = newText;
            textEl.style.display = '';
            actionsEl.style.display = '';
            textarea.remove();
            editActions.remove();
        });
    });

    const deleteBtn = document.createElement('button'); // кнопка "удалить"
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';

    deleteBtn.addEventListener('click', function () {
        notes = notes.filter(n => n.id !== note.id);
        saveNotes();
        noteEl.remove();
    });

    noteEl.appendChild(textEl);
    noteEl.appendChild(actionsEl);

    actionsEl.appendChild(editBtn);
    actionsEl.appendChild(deleteBtn);
    
    notesContainer.prepend(noteEl);
};

addBtn.addEventListener('click', function () {
    const text = noteInput.value;

    // объект заметки
    const newNote = {
        id: Date.now().toString(),
        text: text
    };
    notes.push(newNote);
    saveNotes();
    renderNote(newNote);
    noteInput.value = '';
});

notes = loadNotes();
notes.forEach(note => renderNote(note));
