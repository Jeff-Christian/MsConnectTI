import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    const fetchPcs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/pcs"); // sua API
        setPcs(data);
      } catch (err) {
        console.error("Erro ao buscar PCs:", err);
      }
    };
    fetchPcs();
  }, []);


return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {pcs.map((pc) => (
        <div
          key={pc.id}
          className="bg-white rounded-2xl p-4 shadow flex flex-col gap-2"
        >
          <h2 className="font-bold text-lg">ID: {pc.id}</h2>

          <div className="flex gap-2 flex-wrap">
            {pc.perifericos.map((item) => (
              <span
                key={item.nome}
                className={`px-2 py-1 rounded-full text-sm text-white ${peripheralColors[item.status]}`}
              >
                {item.nome}
              </span>
            ))}
          </div>

          <div className="mt-2">
            <span
              className={`px-2 py-1 rounded text-sm text-white ${statusColors[pc.status]}`}
            >
              {pc.status}
            </span>
          </div>

          <div className="mt-2">
            <p className="text-sm font-semibold">Tickets abertos:</p>
            <div className="flex gap-2 flex-wrap">
              {pc.tickets.length > 0 ? (
                pc.tickets.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                  >
                    {t}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-500">Nenhum</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Computadores
