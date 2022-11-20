import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import User from './pages/user/User';
import Expenditure from './features/expenditure/Expenditure';
import Personal from './features/personal/Personal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/user' element={<User/>} /> */}
        <Route path='/expenditure' element={<Expenditure/>} />
        <Route path='/personal' element={<Personal/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
