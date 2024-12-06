const notepad = document.getElementById('notepad');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const savedNotes = document.getElementById('savedNotes');

let notes = [];

// Save note
saveBtn.addEventListener('click', () => {
    const noteText = notepad.value.trim();
    if (noteText) {
        notes.push(noteText);
        updateSavedNotes();
        notepad.value = '';
    }
});

// Reset notepad
resetBtn.addEventListener('click', () => {
    notepad.value = '';
});

// Update saved notes display
function updateSavedNotes() {
    savedNotes.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.innerHTML = `
            <span>${note}</span>
            <button class="edit-btn" onclick="editNote(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;
        savedNotes.appendChild(noteElement);
    });
}

// Edit note
function editNote(index) {
    const newText = prompt('Edit your note:', notes[index]);
    if (newText !== null) {
        notes[index] = newText.trim();
        updateSavedNotes();
    }
}

// Delete note
function deleteNote(index) {
    if (confirm('Are you sure you want to delete this note?')) {
        notes.splice(index, 1);
        updateSavedNotes();
    }
}