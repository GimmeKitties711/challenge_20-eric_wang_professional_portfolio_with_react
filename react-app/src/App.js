import logo from './Derpy_kitty.jpg';
import './App.css';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < PortfolioContainer />
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
