import InfoCard from "./_components/InfoCards";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <InfoCard
        titulo="¿Sabías que…?"
        texto="El corazón humano puede latir más de 100.000 veces al día."
      />
    </div>
  );
}
