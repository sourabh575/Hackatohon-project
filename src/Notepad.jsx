import { useState } from 'react';
import './CSS/Notepad.css';

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);

  function addNote() {
    setNotes([...notes, '']);
    setActiveNoteIndex(notes.length); // focus on new note
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
          <textarea value={"Select a note from the sidebar or create a new one."} className='textArea'></textarea>
        )
        }
        <button onClick={addNote} style={{ marginTop: '20px',justifyContent:'center', alignItems:'center'}}>
          Add Note
        </button>
      </div>

      {/* Sidebar */}
      <div
        style={{
          width: '50vh',
          backgroundColor: '#111',
          borderLeft: '1px solid gray',
          padding: '20px',
        }}
      >
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