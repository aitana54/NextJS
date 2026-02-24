import { getPets, getPet } from "../../../../lib/pets";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;

export function generateStaticParams() {
  const pets = getPets();

  return pets.map((pet) => ({
    id: pet.id,
  }));
}

export default async function PetDetail({ params }) {
  const { id } = await params;
  const pet = getPet(id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="p-8">
      <Image
        src={pet.photo}
        alt={pet.name}
        width={400}
        height={300}
        className="rounded mb-4"
      />
      <h1 className="text-2xl font-bold">{pet.name}</h1>

      <p className="mt-2">Especie: {pet.species}</p>
      <p>Edad: {pet.age} años</p>

      <Link href="/exercises/ex7/pets" className="text-blue-600 underline mt-4 block">
        ← Volver al listado
      </Link>
    </div>
  );
}