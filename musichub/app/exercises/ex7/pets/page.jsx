import Link from "next/link";
import { getPets } from "../../../lib/pets";

export const revalidate = 60;

export default function PetsPage() {
  const pets = getPets();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mascotas</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="border p-4 rounded">
            <h2 className="font-semibold">{pet.name}</h2>
            <p>{pet.species} - {pet.age} años</p>

            <Link
              href={`/exercises/ex7//pets/${pet.id}`}
              className="text-blue-600 underline"
            >
              Ver ficha
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}