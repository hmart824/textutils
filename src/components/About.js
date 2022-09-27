import React from "react";

export default function About(props) {
  return (
    <>
      <div className={`container text-${props.mode === "light" ? 'dark' : 'light' }`}>
        <h1>About US</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}>
               TextUtils gives you a way to analyze your text quickly and efficiently. It provides the data about no of words, no of characters and time taken to read. It also shows the preview.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Free To Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}>
                TextUtils is a absolutely free software. It have some usefull tools that can help you to manipulate your text easily.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatibility
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode === "dark" ? 'white' : 'rgb(41 56 70)' ,backgroundColor: props.mode === "dark" ? 'rgb(41 56 70)' : 'white'}}>
               This text analyzer works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
