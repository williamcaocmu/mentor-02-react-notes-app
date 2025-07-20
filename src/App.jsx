import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import ToggleButton from "./components/ToggleButton";

const initialNotes = [
  {
    id: 1,
    title: "Note 1",
    description: "Note 1 description",
    priority: "high",
    category: "work",
  },
  {
    id: 2,
    title: "Note 2",
    description: "Note 2 description",
    priority: "medium",
    category: "personal",
  },
  {
    id: 3,
    title: "Note 3",
    description: "Note 3 description",
    priority: "low",
    category: "ideas",
  },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const handleAddNote = ({ title, priority, category, description }) => {
    const newNote = {
      id: notes.length + 1,
      title,
      priority,
      category,
      description,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
        <ToggleButton />
        <NoteForm handleAddNote={handleAddNote} />
        <NoteList notes={notes} />
      </div>
    </>
  );
}

export default App;
