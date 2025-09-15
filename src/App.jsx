import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/MsconnectTI" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
