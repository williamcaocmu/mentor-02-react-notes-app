function ToggleButton() {
  return (
    <button className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4">
      {/* {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"} */}
      Add New Note ➕
    </button>
  );
}

export default ToggleButton;
