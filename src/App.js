
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }
  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(41 56 70)'
      showAlert("Dark mode has been enabled" , "success")
    }
  }

  return (
  <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar /> */}
<Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} alert={alert}      showAlert={showAlert}/> }/>
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
  </div>
</Router>
  </>
  );
}

export default App;
