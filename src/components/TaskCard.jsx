import { CheckCircle, Circle, Trash2, RotateCcw } from "lucide-react";

function TaskCard({ task, onDeleteTask, onToggleTaskStatus }) {
    const isCompleted = task.status === "validé";

    return (
        <article className={`task-card ${isCompleted ? "completed" : ""}`}>
        <div className="task-header">
            <h2>{task.title}</h2>

            {isCompleted ? (
            <CheckCircle className="status-icon completed-icon" size={24} />
            ) : (
            <Circle className="status-icon todo-icon" size={24} />
            )}
        </div>

        <p className="task-status">
            Statut : <span>{task.status}</span>
        </p>

        <div className="task-actions">
            <button onClick={() => onToggleTaskStatus(task.id)}>
            {isCompleted ? (
                <>
                <RotateCcw size={18} />
                Remettre à faire
                </>
            ) : (
                <>
                <CheckCircle size={18} />
                Valider
                </>
            )}
            </button>

            <button
            className="delete-button"
            onClick={() => onDeleteTask(task.id)}
            >
            <Trash2 size={18} />
            Supprimer
            </button>
        </div>
        </article>
    );
}

export default TaskCard;