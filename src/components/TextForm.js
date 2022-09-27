import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Cleared", "danger");
  };
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "info");
  }
//   // const handlePaste = ()=>{ 
//   // setText("");
//   // const newText = navigator.clipboardData.getData('text');
//   // document.getElementById("myBox").value = navigator.clipboard.writeText(newText.value);
// }
  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className= {`text-${props.mode === "light" ? 'dark' : 'light' }`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handlePaste}>
          Paste Text
        </button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
          Clear Extra Space
        </button>
      </div>
      <div className={`container my-2 text-${props.mode === "light" ? 'dark' : 'light' }`}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textarea to preview" }</p>
      </div>
    </>
  );
}
