import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick =()=>{

        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
         setText(newText)
    }
    const handlelowerClick =()=>{

      console.log("lowercase was clicked" + text);
      let newText = text.toLowerCase();
       setText(newText)
  }
  const handleClrClick =()=>{

    console.log("Clearcase was clicked" + text);
    let newText =("");
     setText(newText)
}
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value)
    
    }
    
    const[text, setText] = useState('Enter text here');
    // setText("new text");
  return (
    <>
    <div className="container">
      {/* <h1>{props.heading} - {text}</h1> */}
      <h1>{props.heading}</h1>


      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to uppercase</button>
      <button className="btn btn-primary  mx-1 my-1" onClick={handlelowerClick}> Convert to lowercase</button>
      <button className="btn btn-primary  mx-1 my-1" onClick={handleClrClick}> Clear Text</button>


      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ") .filter((element)=> {return element.length!==0}) .length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
        
    </div>
    </>
  );
}
