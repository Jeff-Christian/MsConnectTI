import { Outlet, Link, Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";

import {assets} from '../assets/assets.js';
import "../Styles/Dashboard.css";

export default function DashboardLayout() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Deslogado com sucesso!");
  };

    return (
    <div className="ContainerContent flex h-screen bg-purple-900 text-white">
      {/* Sidebar */}
      <div className="sidebar w-64 bg-purple-800 p-4 flex flex-col justify-between">
        <img src={assets.logo} className="logo" alt="Ms Connect Logo" />
        <div>
          <nav className="space-y-4">
            <Link to="/dashboard/computadores" className="block hover:text-gray-300">🖥️ Computadores</Link>
            <Link to="/dashboard/tickets" className="block hover:text-gray-300">🎟️ Tickets</Link>
            <Link to="/dashboard/inventario" className="block hover:text-gray-300">📦 Inventário</Link>
          </nav>
        </div>
        <button 
        className="logout bg-white text-black px-4 py-2 rounded"
        onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Conteúdo dinâmico */}
      <div className="flex-1 bg-white text-black p-6 rounded-tl-2xl">
        <Outlet />
      </div>
    </div>
  );
}