export default function ModeButton ( { label, mode, onSelect }) {
    return (
        <button
      onClick={() => onSelect(mode)}
      className="px-4 py-2 border rounded-md transition-transform hover:scale-105 hover:bg-gray-100"
    >
      {label}
    </button>
    );
}