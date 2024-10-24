import './App.css';
import SplashScreen from './LandingPage/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Authentication/ProtectedRoute';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import HomePage from './Homepage/HomePage';
import CategoryPage from './Homepage/CategoryPage';
import CategoryDetails from './Homepage/CategoryDetails';
import Menu from './Header/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path='/signup' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<HomePage/>}/>
            <Route path="/category" element={<CategoryPage />} />
            <Route path='/home/:id' element={<CategoryDetails/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
