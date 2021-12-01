import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclrClick = () => {
    let newText = " ";
    setText(newText);
  };
  /*const handletitleClick = () => {
     // let newText = text.toLowerCase().split(" ").map.(word = => {word[0].toUpperCase() + word.substr(1, word.length);
     })
     .join(" "); 
    setText(newText);
    }; */

  const handleOnChange = (event) => {
    //console.log("On change" + text);
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container">
        <h3> {props.heading} </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my box"
            rows="8"
          ></textarea>
        </div>

        <div className="d-grid d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={handleUpClick}
          >
            Covert to Upper case
          </button>
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={handleLoClick}
          >
            Covert to Lower case
          </button>

          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={handleclrClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-8">
        <h3> Your Text Summary </h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p> In {0.008 * text.split(" ").length} minutes it is readable. </p>
        <h3> Preview</h3>
        <p> {text} </p>
      </div>
    </>
  );
}
