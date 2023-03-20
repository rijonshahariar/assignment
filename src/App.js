import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home'
import Register from './Components/Register/Register';
import Header from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Friends from './Components/Friends/Friends';
import RequireAuth from './Required/RequireAuth';
function App() {
  return (
    <div>
      <Header/>
      <>
      <Routes>
      
      <Route path="/" element={<RequireAuth><Home/></RequireAuth>}></Route>
      <Route path="/home" element={<RequireAuth><Home/></RequireAuth>}></Route>
      <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}></Route>
      <Route path="/friends" element={<RequireAuth><Friends/></RequireAuth>}></Route>
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      </Routes>
      </>
    </div>
  );
}

export default App;
