import './App.css';
import react , {useState} from 'react';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import Gallery from './components/Gallery';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null)

  const showAlert = ( message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success");

    }
  } 

  setInterval(() => {
    document.title = "TextUtils";
  },1500);
  setInterval(() => {
    document.title = "Home";
  },2000);

  return (
    <div className="App" > 
      {/* <Nav /> */}

      <Router>
        <Nav title="TextUtils" mode = {mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

          </div> 
        </Router>
    </div>
  );
}

export default App;
