export default function SongCard({ title, artist, youtubeId }) {
  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const ytUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="aspect-video w-full">
        <img
          src={thumb}
          alt={`${title} — ${artist}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold leading-tight text-gray-900">
          {title}
        </h3>
        <p className="text-xs text-gray-800">{artist}</p>

        <a
          href={ytUrl}
          target="_blank"
          className="mt-3 inline-flex items-center rounded-lg border border-[#F50057]/30 bg-[#F50057]/10 px-3 py-1.5 text-xs font-medium text-[#F50057] hover:bg-[#F50057]/15"
        >
          ▶️ Play on YouTube
        </a>
      </div>
    </article>
  );
}