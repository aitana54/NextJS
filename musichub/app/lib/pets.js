import pets from "../data/pets.json";

export function getPets() {
  return pets;
}

export function getPet(id) {
  return pets.find((p) => p.id === id);
}