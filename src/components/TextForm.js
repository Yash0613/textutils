import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick = ()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
   const speak = ()=>{
    let message= new SpeechSynthesisUtterance();
    message.text=text;
    window.speechSynthesis.speak(message);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text,setText]= useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>
            {props.heading}
        </h1>
    <div className="mb-3">
        <label for="myBox" className="form-label"></label>
        <textarea className="form-control" onChange={handleOnChange} value ={text}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}  id = "myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2> Your text summary</h2>
      <p> {text.split(" ").length}  words and  {text.length}characters.</p>
      <p> { 0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p> {text.length>0?text:"Enter Something in the textbox above to Preview it here"}</p>
    </div>
    </>
    
  )
}
