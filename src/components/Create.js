import React, { useState } from "react";

const Create = props => {
  const initialNote = { title: "", body: "" };
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [newNote, setNewNote] = useState({
    title: "",
    body: ""
  });

  const handleChange = event => {
    setNewNote({ ...newNote, [event.target.name]: event.target.value });
  };

  // const handleTitleChange = event => {
  //   // setTitle(event.target.value);
  //   const key = "title";
  //   setNewNote( { ...newNote,
  //     [event.target.name]: event.target.value });
  // };

  // const handleBodyChange = event => {
  //   // setBody(event.target.value);
  //   setNewNote({ ...newNote, body: event.target.value });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newNote);
    props.setNotes([newNote, ...props.notes]);

    if (!newNote.title || !newNote.body) {
      alert("Please fill out form");
    } else {
      props.setNotes([newNote, ...props.notes]);
    }
    resetForm();
  };

  const resetForm = () => {
    // event.preventDefault();
    setNewNote(initialNote);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newNote.title}
      />
      {/* <input
        type="date"
        name="date"
        placeholder="Title"
        onChange={handleChange}
      
      /> */}
      <textarea name="body" onChange={handleChange} value={newNote.body} />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        {" "}
        Reset
      </button>
    </form>
  );
};

export default Create;

// <form method="post" action="http://lambdaschool.com">
{
  /* <label for="textField">Some vlaue</label> */
}
{
  /* <select>
      <option></option>
      <option>one</option>
      <option>two</option>
    </select>
    <textarea></textarea> */
}
