var noteInput = document.querySelector('#note-input');
var addButton = document.querySelector('#add-button');
var notesList = document.querySelector('#notes-list');
function addNote() {
    if (!noteInput || !notesList) {
        console.error("Could not find the stuff");
        return;
    }
    var noteText = noteInput.value.trim();
    if (noteText !== '') {
        var li_1 = document.createElement('li');
        var noteSpan = document.createElement('span');
        noteSpan.textContent = noteText;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function () {
            if (notesList) {
                notesList.removeChild(li_1);
            }
        });
        li_1.appendChild(noteSpan);
        li_1.appendChild(deleteButton);
        notesList.appendChild(li_1);
        noteInput.value = '';
    }
}
if (addButton) {
    addButton.addEventListener('click', addNote);
}
if (noteInput) {
    noteInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addNote();
        }
    });
}
