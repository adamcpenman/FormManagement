import React, { useState } from "react";

const Create = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleTextChange = event => {
    setTitle(event.target.value);
  };

  const handleBodyChange = event => {
    setBody(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleTextChange} />
      <textarea onChange={handleBodyChange} />
      <button type="submit">Submit</button>
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
