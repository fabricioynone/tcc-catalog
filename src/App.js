import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Carousel from './components/Carousel';
import { useState } from 'react';

function App() {
  const[subject, setSubject] = useState("");
  const getSubjectName = (data) => {
    console.log(data);
    setSubject(data);
  }
  return (
    <div className="App">
      <Navbar callback={getSubjectName} />
      <div className="flex--display">
        <Header course={subject}/>
        <Main />
        <Carousel/>
      </div>
    </div>
  );
}

export default App;