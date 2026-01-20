export default function Header({ title }) {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold tracking-tight text-[#F50057]">
          {title}
        </h1>
        <nav className="text-sm">
          <a
            href="#"
            className="text-gray-600 hover:text-[#F50057] transition-colors"
          >
            Inicio
          </a>
        </nav>
      </div>
    </header>
  );
}

// Componente funcional que recibe una prop 'title' y la muestra.
// Ejemplo simple de uso de props + JSX (HTML dentro de JavaScript).
// No usa estado, solo renderiza información que le llega del padre (layout).
// Está en la carpeta _components porque es un componente reutilizable.
// No es una página ni layout completo.