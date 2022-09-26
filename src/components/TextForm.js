import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase!", "success");
  };
  const handleUpLoClick = () => {
    console.log("lowercase clicked ");
    let newTextlo = text.toLowerCase();
    setText(newTextlo);
    props.showAlert("Converted To Lowercase!", "success");
  };
  const handleUpCapi = () => {
    let words = text.split(" ");
    console.log(words);

    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
      setText(uppercaseword);
      props.showAlert("Capitilizing the sentance", "success");
    });
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleUpChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black ",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpCapi}>
          To CapitlizeWord
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split("").length} Minutes Read</p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
