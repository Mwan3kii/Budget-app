import './App.css';
import SplashScreen from './LandingPage/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Authentication/Register';
import Login from './Authentication/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path='/signup' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
