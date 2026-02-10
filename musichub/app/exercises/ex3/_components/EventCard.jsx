export default function EventCard ( { title, location, date, isFree }) {
    return (
    <div className="border rounded p-3 mb-2">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm">{date}</p>
      {isFree && <span className="text-green-600 font-bold">GRATUITO</span>}
    </div>
    )
}