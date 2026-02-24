import { getDestinations } from "../../../lib/destinations";

export const revalidate = 0; // Fuerza SSR en cada request

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Destinos</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {destinations.map((destination) => (
          <li
            key={destination.id}
            className="border p-4 rounded"
          >
            <h2 className="font-semibold">{destination.name}</h2>
            <p className="text-sm text-gray-600">
              {destination.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
