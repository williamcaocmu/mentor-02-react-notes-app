import { useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("work");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, priority, category, description);
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="note" className="block font-semibold">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="note" className="block font-semibold">
          Priority
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        >
          <option value="high">🔴 High</option>
          <option value="medium">🟠 Medium</option>
          <option value="low">🟢 Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="note" className="block font-semibold">
          Category
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="work">📂 Work</option>
          <option value="personal">🏠 Personal</option>
          <option value="ideas">💡 Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="note" className="block font-semibold">
          Description
        </label>
        <textarea
          rows="3"
          className="w-full p-2 border rounded-lg"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
