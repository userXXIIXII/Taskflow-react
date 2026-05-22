import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            return;
        } 

        const newTask = {
        id: Date.now(),
        title: title,
        status: "à faire",
        };

        onAddTask(newTask);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Ajouter une tâche..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TaskForm;