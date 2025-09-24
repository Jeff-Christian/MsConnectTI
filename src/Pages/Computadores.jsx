import React from 'react';
import axios from "axios";

import { useEffect, useState } from "react";

import AddPcForm from '../modal/AddPcForm';
import '../styles/Computadores.css';

const statusColors = {
  Ativo: "bg-green-500",
  Inativo: "bg-red-500",
  "Mesa desmontada": "bg-gray-400"
};

const peripheralColors = {
  ativo: "bg-green-400",
  inativo: "bg-red-400",
  desabilitado: "bg-gray-400"
};

function Computadores() {

  const [pcs, setPcs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchPcs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/pcs");
        setPcs(data);
      } catch (err) {
        console.error("Erro ao buscar PCs:", err);
      }
    };
    fetchPcs();
  }, []);

  const handleAddPc = (newPc) => {
    setPcs([...pcs, newPc]); // atualiza os cards
    setShowForm(false); // fecha form
  };


return (
    <>
    <div className="contentText">
      <h1>Overview pcs ti</h1>
      <p>Lista de computadores em operação</p>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        {showForm ? "Cancelar" : "Adicionar PC"}
      </button>

      {showForm && <AddPcForm onAdd={handleAddPc} onClose={() => setShowForm(false)} />}
    </div>

    <div className="pc-grid">
      {pcs.map((pc) => (
        <div className="pc-card" key={pc._id}>
          <h3 className="pc-id">{pc.pcId}</h3>

          <div className="perifericos">
            {pc.perifericos.map((p, index) => (
              <span
                key={index}
                className={`tag ${
                  p.status === "ativo" ? "tag-green" : "tag-red"
                }`}
              >
                {p.name}
              </span>
            ))}
          </div>

          <div className="status">
            <span
              className={`status-tag ${
                pc.status === "ativo"
                  ? "status-green"
                  : pc.status === "inativo"
                  ? "status-red"
                  : "status-gray"
              }`}
            >
              {pc.status === "desmontado" ? "Mesa desmontada" : pc.status}
            </span>
          </div>

          <div className="tickets">
            <p>Tickets abertos</p>
            <div className="tickets-list">
              {pc.tickets.map((t, i) => (
                <span key={i} className="ticket-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default Computadores
