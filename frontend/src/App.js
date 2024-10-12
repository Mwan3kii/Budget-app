import './App.css';
import SplashScreen from './LandingPage/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import HomePage from './Homepage/HomePage';
import CategoryPage from './Homepage/CategoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path='/signup' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
