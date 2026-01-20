'use client';
import { useState } from 'react';

export default function WelcomeBanner({ title, subtitle }) {
  const [dark, setDark] = useState(false);
  const [hola, setHola] = useState(true);

  const bgColor = dark ? 'bg-[#F50057]' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-gray-900';
  const borderColor = dark ? 'border-[#F50057]' : 'border-gray-200';
  const btnColor = `rounded-lg border px-3 py-2 text-sm font-medium transition-all active:scale-95 ${
    dark
      ? 'bg-white text-[#F50057] border-white hover:bg-gray-50'
      : 'bg-[#F50057] text-white border-[#F50057] hover:opacity-90'
  }`;

  return (
    <section
      className={`rounded-2xl border p-6 transition-all duration-300 shadow-md ${bgColor} ${textColor} ${borderColor}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-sm opacity-80 font-medium">{subtitle}</p>
          )}
          <p className="mt-4 text-lg font-semibold">
            {hola ? 'Hola 👋' : 'Adiós 👋'}
          </p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setDark(!dark)} className={btnColor}>
            Tema
          </button>
          <button onClick={() => setHola(!hola)} className={btnColor}>
            Saludo
          </button>
        </div>
      </div>
    </section>
  );
}

// Componente interactivo del cliente (usa "use client").
// Introduce el hook useState: el componente "recuerda" valores (dark/hola) y cambia la UI sin recargar.
// Ejemplo de renderizado condicional y manejo de estado.
// Recibe props (title, subtitle) para mostrar información dinámica.
// Usa clases de Tailwind CSS que cambian según el estado (dark mode).
// Está en la carpeta _components porque es un componente reutilizable.
// No es una página ni layout completo.
// En Next.js, los componentes en la carpeta "app" que usan "use client" se ejecutan en el navegador, permitiendo interactividad.
// Los componentes sin "use client" son estáticos y se renderizan en el servidor por defecto.
// Los hooks como useState solo funcionan en componentes de cliente.
// Aquí, los botones permiten alternar el tema oscuro y cambiar el saludo dinámicamente.
// El componente se vuelve interactivo gracias a React y Next.js.
// El estado (dark/hola) provoca que el componente se re-renderice automáticamente al cambiar.
// El uso de plantillas literales (``) permite combinar clases CSS dinámicamente según el estado.
// El operador ternario (condición ? valorSiVerdadero : valorSiFalso) se usa para elegir clases según el estado.
// Por ejemplo, bgColor cambia entre dos colores según si dark es true o false.
// El uso de && permite renderizar condicionalmente el subtitle solo si existe.