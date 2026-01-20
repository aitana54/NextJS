import WelcomeBanner from './_components/WelcomeBanner';

export default function Page() {
  return (
    <>
      <WelcomeBanner
        title="Bienvenido/a a MusicHub"
        subtitle="Sesión 3.1: Estructura + Props + micro-interacción"
      />

      <section className="mt-8">
        <h3 className="text-lg font-semibold text-[#F50057]">Hoy aprenderás</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li>Cómo usar props y JSX en componentes.</li>
          <li>Cómo cambiar la interfaz con un estado (useState).</li>
        </ul>
      </section>
    </>
  );
}

// Página principal que compone los componentes anteriores.
// Usa el tag <>…</> (React Fragment) para agrupar varios elementos sin añadir un div extra al HTML.
// Muestra cómo pasar props a un componente (title, subtitle) y organizar secciones.
// No tiene estado propio: solo estructura y props.
// El contenido de esta página se renderiza dentro del layout definido en layout.jsx.
// En Next.js, cada archivo en la carpeta "app" que no sea un layout o componente especial es una página.
// Por defecto, las páginas son estáticas a menos que usen hooks de estado u otras características de cliente.
// Por eso esta página es estática: no usa "use client" ni hooks.