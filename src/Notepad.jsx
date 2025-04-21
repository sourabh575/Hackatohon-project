import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CSS/Notepad.css';

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);

  // Load notes from cookies on mount
  useEffect(() => {
    const savedNotes = Cookies.get('notepad_notes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes);
        setNotes(parsedNotes);
      } catch (error) {
        console.error('Error parsing notes from cookies:', error);
      }
    }
  }, []);

  // Save notes to cookies whenever they change
  useEffect(() => {
    Cookies.set('notepad_notes', JSON.stringify(notes), { expires: 365 });
  }, [notes]);

  function addNote() {
    const updatedNotes = [...notes, ''];
    setNotes(updatedNotes);
    setActiveNoteIndex(updatedNotes.length - 1);
  }

  function updateActiveNote(value) {
    const newNotes = [...notes];
    newNotes[activeNoteIndex] = value;
    setNotes(newNotes);
  }

  return (
    <div id="container">
      {/* Main Editor Area */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 id='title'>Note Pad</h1>
        {activeNoteIndex !== null ? (
          <textarea
            value={notes[activeNoteIndex]}
            onChange={(e) => updateActiveNote(e.target.value)}
            className='textArea'
          />
        ) : (
          <textarea value={"Select a note from the sidebar or create a new one."} className='textArea' readOnly />
        )}
        <button onClick={addNote} style={{ marginTop: '20px' }} id='Add'>
          Add Note
        </button>
      </div>

      {/* Sidebar */}
      <div id='sidebar'>
        <h3>Notes</h3>
        {notes.map((note, index) => (
          <div
            key={index}
            onClick={() => setActiveNoteIndex(index)}
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: activeNoteIndex === index ? '#333' : '#222',
              cursor: 'pointer',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            {note.slice(0, 20) || 'New Note'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notepad;