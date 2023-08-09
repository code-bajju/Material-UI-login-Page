import logo from './logo.svg';
import './App.css';
import Example from './Components/Example/Example';
import LoginPage from './Components/LoginPage/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
// import LandingPage from './Components/LandingPage/LandingPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <LoginPage/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
