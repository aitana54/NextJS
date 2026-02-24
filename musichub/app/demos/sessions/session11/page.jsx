'use client';
import { useState } from 'react';
import songs from '@/data/songs.json';
import SongCard from './_components/SongCard';

export default function SongsPage() {
  // Contador global de likes
  const [likesCount, setLikesCount] = useState(0);

  function handleToggleLike(next) {
    setLikesCount((prev) => prev + (next ? 1 : -1));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <header>
        <p className="text-xs text-gray-500">
          Canciones: {songs.length} {likesCount > 0 && `· Likes: ${likesCount}`}
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((s) => (
          <SongCard
            key={s.id} // ← clave única
            title={s.title}
            artist={s.artist}
            youtubeId={s.youtubeId}
            // Enviamos la función del contador global
            onToggleLike={handleToggleLike}
          />
        ))}
      </div>
    </section>
  );
}