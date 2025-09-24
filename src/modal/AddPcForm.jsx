import React, { useState } from "react";
import "../Styles/AddPcForm.css";

function AddPcForm({ onAdd, onClose }) {
  const [pcId, setPcId] = useState("");
  const [status, setStatus] = useState("ativo");
  const [tickets, setTickets] = useState("");
  const [perifericos, setPerifericos] = useState([]);
  const [novoPeriferico, setNovoPeriferico] = useState("");

  const handleAddPeriferico = () => {
    if (novoPeriferico.trim() === "") return;
    setPerifericos([
      ...perifericos,
      { name: novoPeriferico.trim(), status: "ativo" }, // default ativo
    ]);
    setNovoPeriferico("");
  };

  const handlePerifericoStatusChange = (index, newStatus) => {
    const updated = [...perifericos];
    updated[index].status = newStatus;
    setPerifericos(updated);
  };

  const handleRemovePeriferico = (index) => {
    setPerifericos(perifericos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPc = {
      pcId,
      status,
      perifericos,
      tickets: tickets
        ? tickets.split(",").map((t) => t.trim())
        : [],
    };

    try {
      const response = await fetch("http://localhost:8080/api/pcs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPc),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar PC");

      const savedPc = await response.json();
      onAdd(savedPc);
      onClose();
      setPcId("");
      setStatus("ativo");
      setTickets("");
      setPerifericos([]);
    } catch (err) {
      console.error("Erro no cadastro:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* Cabeçalho */}
        <div className="modal-header">
          <h2>Cadastrar Novo PC</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            ID do PC
            <input
              type="text"
              value={pcId}
              onChange={(e) => setPcId(e.target.value)}
              placeholder="Ex: PC001"
              required
            />
          </label>

          <label>
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="desmontado">Desmontado</option>
            </select>
          </label>

          {/* Periféricos */}
          <div className="perifericos-section">
            <label>Periféricos</label>
            <div className="periferico-add">
              <input
                type="text"
                value={novoPeriferico}
                onChange={(e) => setNovoPeriferico(e.target.value)}
                placeholder="Ex: Mouse"
              />
              <button type="button" onClick={handleAddPeriferico}>
                +
              </button>
            </div>

            {/* Lista de periféricos adicionados */}
            <ul className="perifericos-list">
              {perifericos.map((p, index) => (
                <li key={index} className="periferico-item">
                  <span>{p.name}</span>
                  <select
                    value={p.status}
                    onChange={(e) =>
                      handlePerifericoStatusChange(index, e.target.value)
                    }
                  >
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => handleRemovePeriferico(index)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <label>
            Tickets
            <input
              type="text"
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              placeholder="IDs separados por vírgula"
            />
          </label>

          <div className="modal-actions">
            <button type="submit" className="submit-btn">
              Adicionar PC
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPcForm;
