const noteInput = document.querySelector('#note-input') as HTMLInputElement | null;
const addButton = document.querySelector('#add-button') as HTMLButtonElement | null;
const notesList = document.querySelector('#notes-list') as HTMLUListElement | null;
function addNote() {
    if (!noteInput || !notesList) {
        console.error("Could not find the stuff");
        return;
    }

    const noteText: string = noteInput.value.trim();

    if (noteText !== '') {
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
        noteInput.value = '';
    }
}
if (addButton) {
    addButton.addEventListener('click', addNote);
}
if (noteInput) {
    noteInput.addEventListener('keyup', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            addNote();
        }
    });
}