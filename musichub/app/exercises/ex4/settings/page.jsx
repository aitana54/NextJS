"use client";

import { useState } from "react";
import ModeButton from "../_components/ModeButton";

export default function SettingsPage() {
  const [selectedMode, setSelectedMode] = useState(null);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Panel de configuración</h1>

      {/* Botones */}
      <div className="flex gap-4">
        <ModeButton
          label="Modo claro"
          mode="light"
          onSelect={setSelectedMode}
        />
        <ModeButton
          label="Modo oscuro"
          mode="dark"
          onSelect={setSelectedMode}
        />
        <ModeButton
          label="Modo minimalista"
          mode="minimal"
          onSelect={setSelectedMode}
        />
      </div>

      {/* Renderizado condicional */}
      <div className="mt-6">
        {!selectedMode && (
          <p className="text-gray-500">
            Selecciona un modo para comenzar
          </p>
        )}

        {selectedMode === "light" && (
          <div className="p-4 bg-gray-100 text-black rounded-md">
            Este es el modo claro
          </div>
        )}

        {selectedMode === "dark" && (
          <div className="p-4 bg-gray-900 text-white rounded-md">
            Este es el modo oscuro
          </div>
        )}

        {selectedMode === "minimal" && (
          <p className="text-sm text-gray-700">
            Modo minimalista activado.
          </p>
        )}
      </div>
    </div>
  );
}