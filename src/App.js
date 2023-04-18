import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex--display">
        <Header course="MARKETING"/>
        <Main />
        <Carousel/>
      </div>
    </div>
  );
}

export default App;