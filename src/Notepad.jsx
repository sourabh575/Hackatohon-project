import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import './CSS/Notepad.css';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function fetchNotesFromAPI() {
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    credentials: 'include',
  };

  return fetch("https://jlu-backend-k6f7.onrender.com/api/users/getNotes", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (Array.isArray(result.notes)) {
        const noteContents = result.notes.map(note => note.content);
        return noteContents;
      } else {
        console.error("Invalid notes format from API:", result);
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching notes from API:", error);
      return [];
    });
}

function addNoteToAPI(content) {
  return fetch("https://jlu-backend-k6f7.onrender.com/api/users/addNote", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content })
  })
    .then(res => res.json())
    .then(result => {
      console.log("Note added to API:", result);
      return result;
    })
    .catch(error => {
      console.error("Error adding note to API:", error);
    });
}

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);
  const hasFetchedFromAPI = useRef(false);

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

  useEffect(() => {
    Cookies.set('notepad_notes', JSON.stringify(notes), { expires: 365 });
  }, [notes]);

  async function addNote() {
    const newNote = "New note";

    if (!hasFetchedFromAPI.current) {
      const apiNotes = await fetchNotesFromAPI();
      setNotes(apiNotes);
      setActiveNoteIndex(apiNotes.length > 0 ? 0 : null);
      hasFetchedFromAPI.current = true;
    } else {
      const result = await addNoteToAPI(newNote);

      if (result) {
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        setActiveNoteIndex(updatedNotes.length - 1);
      }
    }
  }

  function updateActiveNote(value) {
    const newNotes = [...notes];
    newNotes[activeNoteIndex] = value;
    setNotes(newNotes);
  }

  return (
    <div id="container">
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 id='title'>Note Pad</h1>
        {activeNoteIndex !== null ? (
          <textarea
            value={notes[activeNoteIndex]}
            onChange={(e) => updateActiveNote(e.target.value)}
            className='textArea'
          />
        ) : (
          <textarea
            value={"Select a note from the sidebar or create a new one."}
            className='textArea'
            readOnly
          />
        )}
        <button onClick={addNote} style={{ marginTop: '20px' }} id='Add'>
          Add Note
        </button>
      </div>

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
