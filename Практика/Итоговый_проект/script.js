const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.getElementById('notesContainer');

addBtn.addEventListener('click', function () {
    const text = noteInput.value;

    const noteEl = document.createElement('div'); // блок/элемент заметки
    noteEl.className = 'note';

    const textEl = document.createElement('div'); // текст в заметке
    textEl.className = 'note-text';
    textEl.textContent = text;

    const actionsEl = document.createElement('div'); // кнопки в блоке заметки
    actionsEl.className = 'note-actions';

    // кнопка "редактировать"
    const editBtn = document.createElement('button');
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
            textEl.textContent = newText;
            textEl.style.display = '';
            actionsEl.style.display = '';
            textarea.remove();
            editActions.remove();
        });


    });

    // кнопка "удалить"
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', function () {
        noteEl.remove();
    });

    notesContainer.appendChild(noteEl);

    noteEl.appendChild(textEl);
    noteEl.appendChild(actionsEl);

    actionsEl.appendChild(editBtn);
    actionsEl.appendChild(deleteBtn);

    noteInput.value = '';
});

