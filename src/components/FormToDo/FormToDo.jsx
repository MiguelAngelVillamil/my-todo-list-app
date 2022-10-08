import React, {useState} from "react";

export default function FormTodo(props) {

	const [description, setDescription] = useState("");

  const { handleAddItem } = props;

  const handleSubmit = evento => {
    evento.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
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