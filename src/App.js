import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cars from './components/Cars/Cars';
import ReactModal from 'react-modal';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cars></Cars>
    </div>
  );
}

export default App;
