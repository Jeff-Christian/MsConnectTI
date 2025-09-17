import './App.css';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import PrivateRoute from './Components/PrivateRoute';
import Login from './Pages/Login';
import DashboardLayout from './Components/DashboardLayout';
import Computadores from "./Pages/Computadores";
import Tickets from "./Pages/Tickets";
import Inventario from "./Pages/Inventario";

function App() {

  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login/>}/>

          <Route 
            path="/dashboard" 
            element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
            }>
            <Route path="computadores" element={<Computadores />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="inventario" element={<Inventario />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
