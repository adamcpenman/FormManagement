import React, { useState } from "react";

const Create = props => {
  const [title, setTitle] = useState();
  const handleTextChange = event => {
    setTitle(event.target.value);
  };
  return (
    <form>
      Title: {title}
      <input type="text" onChange={handleTextChange} />
      <button>Submit</button>
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
