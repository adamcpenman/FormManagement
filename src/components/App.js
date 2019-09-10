import React, { useState } from "react";
import Create from "./Create";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "A Tale of Two Cities",
      body:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."
    }
  ]);

  return (
    <div className="App">
      <h1>My Notes</h1>

      <Create notes={notes} setNotes={setNotes} />

      {notes.map((note, index) => (
        <div className="note" key={index}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
