import events from "../data/events.json";
import EventCard from "../_components/EventCard.jsx";

const categories = ["charla", "taller", "concierto", "partido"];

export default function page() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Eventos locales</h1>

      {categories.map((category) => {
        const filteredEvents = events
          .filter((event) => event.category === category)
          .sort((a, b) => a.title.localeCompare(b.title));

        return (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {category} ({filteredEvents.length})
            </h2>

            {filteredEvents.length === 0 ? (
              <p className="text-gray-500">No hay eventos disponibles.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    isFree={event.isFree}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </main>
  );
}
