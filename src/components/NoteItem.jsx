function NoteItem({ note }) {
  const renderLeftColor = () => {
    const objMap = { high: "red", medium: "orange", low: "green" };
    return objMap[note.priority] || "gray";
  };

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{
        borderLeftColor: renderLeftColor(),
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category: </strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority: </strong> {note.priority}
      </p>
      <p className="mt-2">{note.description}</p>

      <button className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700">
        🗑 Delete
      </button>
    </div>
  );
}

export default NoteItem;
