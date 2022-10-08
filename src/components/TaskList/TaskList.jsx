import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox.jsx";

export default function TaskList() {
	const [description, setDescription] = useState("");
  return (
    <form>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={description}
            onChange={(evento) => setDescription(evento.target.value)}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};