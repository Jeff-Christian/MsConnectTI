import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {

  return (
    <>
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
