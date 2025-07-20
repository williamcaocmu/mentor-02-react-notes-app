import { useState } from "react";
import NoteForm from "./components/NoteForm";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
        <NoteForm />
      </div>
    </>
  );
}

export default App;
