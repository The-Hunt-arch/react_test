import React, {useState} from 'react'


export default function TextForm(props) {

  const [text, setText ] = useState("Enter the text");
  // const [clear, setClear ] = useState("clear text");
  // // const [clear, setClear ] = useState("clear text");

  
  const handleUpClick = () => {
    const new_text = text.toUpperCase()
    setText(new_text);

    props.showAlert("Converted to uppercase" , "success")
  }
  const handleLoClick = () => {
    const new_text = text.toLowerCase()
    setText(new_text);

    props.showAlert("Converted to lowercase" , "success")
  }

  const handlClear = () => {
    setText("");

    props.showAlert("Clear" , "success")
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox').value;
    navigator.clipboard.writeText(text)

    props.showAlert("Copy to clipboard" , "success")
    
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
    props.showAlert("Removed extra space" , "success")

  }

  const handleOnChange = (event) => {
    setText(event.target.value) 
  }

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black' }}></textarea>
        </div>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>  
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Uppercase</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>  
        <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handlClear}>Clear</button>
        <button disabled = {text.length ===0} className="btn mx-1 my-1" id='new-btn' >animation</button>  
      </div>
      <div className='container my-3' style={{color:props.mode==='dark'?'white':'black' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words, {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box ablove to preview it here."}</p>
      </div>
    </>
    
  )
}
