import logo from './logoEtec.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pagina fuera de servicio, visitar el link de abajo
        </p>
        <a
          className="App-link"
          href="https://etecvirtual.um.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagina funcional
        </a>
      </header>
    </div>
  );
}

export default App;
