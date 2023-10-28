import logo from './Derpy_kitty.jpg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Navigation />
      </header>
      <div className="bigContainer">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <footer className="App-footer">
        < Footer />
      </footer>
    </div>
  );
}

export default App;
