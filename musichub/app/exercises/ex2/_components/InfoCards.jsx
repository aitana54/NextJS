'use client';
import { useState } from "react";

export default function InfoCard({ titulo, texto }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="rounded-xl shadow p-4 bg-gray-500 max-w-md">
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>

      {abierto && (
        <p className="text-gray-800 mb-3">
          {texto}
        </p>
      )}

      <button
        onClick={() => setAbierto(!abierto)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {abierto ? "Ocultar" : "Mostrar más"}
      </button>
    </div>
  );
}
