import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }/>

          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
