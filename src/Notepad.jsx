import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import Navbar from "./navbar.jsx";
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
        return result.notes; // return full note object with id & content
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

function deleteNoteFromAPI(noteId) {
  return fetch(`https://jlu-backend-k6f7.onrender.com/api/users/deleteNote/${noteId}`, {
    method: "DELETE",
    credentials: 'include',
  })
    .then(res => res.json())
    .then(result => {
      console.log("Note deleted from API:", result);
      return result;
    })
    .catch(error => {
      console.error("Error deleting note from API:", error);
    });
}

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
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
    const newNote = notes[activeNoteIndex];

    if (!hasFetchedFromAPI.current) {
      const apiNotes = await fetchNotesFromAPI();
      setNotes(apiNotes);
      setActiveNoteIndex(apiNotes.length > 0 ? 0 : null);
      hasFetchedFromAPI.current = true;
    } else {
      const result = await addNoteToAPI(newNote);

      if (result && result.note) {
        const updatedNotes = [...notes, result.note];
        setNotes(updatedNotes);
        setActiveNoteIndex(updatedNotes.length - 1);
      }
    }
  }

  async function deleteNote(index, noteId) {
    await deleteNoteFromAPI(noteId);
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    if (activeNoteIndex === index) {
      setActiveNoteIndex(null);
    } else if (activeNoteIndex > index) {
      setActiveNoteIndex((prev) => prev - 1);
    }
  }

  function updateActiveNote(value) {
    const newNotes = [...notes];
    newNotes[activeNoteIndex] = { ...newNotes[activeNoteIndex], content: value };
    setNotes(newNotes);
  }

  return (
    <>
      <Navbar />
      <div id="container">
        <button 
          id="sidebar-toggle" 
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? '◀' : '▶'}
        </button>

        <div className={`main-content ${sidebarVisible ? 'compressed' : 'expanded'}`}>
          <h1 id='title'>Note Pad</h1>
          {activeNoteIndex !== null ? (
            <textarea
              value={notes[activeNoteIndex]?.content}
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
          <button onClick={addNote} id='Add'>Add Note</button>
        </div>

        <div id='sidebar' className={sidebarVisible ? 'visible' : 'hidden'}>
          <h3>Notes</h3>
          {notes.map((note, index) => (
            <div
              key={index}
              className={activeNoteIndex === index ? 'active' : ''}
            >
              <div
                onClick={() => setActiveNoteIndex(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ flex: 1 }}>{note.content.slice(0, 20) || 'New Note'}</span>
                <span
                  className="delete-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(index, note._id);
                  }}
                >
                  🗑️
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notepad;