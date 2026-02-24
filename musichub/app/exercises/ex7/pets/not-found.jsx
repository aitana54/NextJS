import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8">
      <h2 className="font-bold">Mascota no encontrada</h2>

      <Link href="/exercises/ex7/pets" className="text-blue-600 underline">
        Volver
      </Link>
    </div>
  );
}