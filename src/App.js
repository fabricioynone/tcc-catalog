import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Carousel from './components/Carousel';
import { useState } from 'react';

function App() {
  const[subject, setSubject] = useState("ADMINISTRAÇÃO");
  var curso;
  switch (subject){
    case 'ADMINISTRAÇÃO':
      curso = 'Administracao';
      break;
    case 'DESENVOLVIMENTO DE SISTEMAS':
      curso = 'Sistemas'
      break;
    case 'MARKETING':
      curso = 'Marketing'
      break;
  }
  console.log(curso)
  return (
    <div className="App">
      <Navbar callback={setSubject} />
      <div className="flex--display">
        <Header course={subject} />
        <Main curso={curso} />
        <Carousel curso={curso} />
      </div>
    </div>
  );
}

export default App;