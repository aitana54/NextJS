import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Bienvenido a TravelHub</h1>
      <p>Descubre destinos increíbles alrededor del mundo.</p>

      <Link
        href="/exercises/ex5/destinations"
        className="inline-block text-blue-600 underline"
      >
        Ver destinos
      </Link>
    </div>
  );
}