// lib/destinations.ts

type Destination = {
  id: number;
  name: string;
  country: string;
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getDestinations(): Promise<Destination[]> {
  // Simula latencia de red
  await wait(800);

  return [
    { id: 1, name: "París", country: "Francia" },
    { id: 2, name: "Tokio", country: "Japón" },
    { id: 3, name: "Buenos Aires", country: "Argentina" },
    { id: 4, name: "Roma", country: "Italia" },
  ];
}
