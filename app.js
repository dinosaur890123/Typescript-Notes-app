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
        var li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
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
