import SongCard from './_components/SongCard';
import songsArray from '@/app/demos/sessions/session09/data/songs.json';

export default function SongsPage() {
  const songs = songsArray; // Aquí podríamos hacer una llamada (fetch) a una API.
  return (
    <section className="space-y-4">
      <header>
        <h2 className="text-xl font-bold tracking-tight">
          Sessión 3.2.1 — Listas y Cards
        </h2>
        <p className="text-sm text-gray-600">
          map, keys, componentización y props
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((s) => (
          <SongCard
            key={s.id}
            title={s.title}
            artist={s.artist}
            youtubeId={s.youtubeId}
          />
        ))}
      </div>
    </section>
  );
}