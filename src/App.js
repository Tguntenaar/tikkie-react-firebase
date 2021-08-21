import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCMaAgcsxMLVBKw436cd_K91XQR4xHcIP0",
    authDomain: "tikkie-react.firebaseapp.com",
    projectId: "tikkie-react",
    storageBucket: "tikkie-react.appspot.com",
    messagingSenderId: "283304463236",
    appId: "1:283304463236:web:9eec5a6a81772b1ba8abd1",
    measurementId: "G-K4HGGKM3MM"
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
