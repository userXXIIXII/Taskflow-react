function TaskCard({ task, onDeleteTask }) {
    return (
        <article className="task-card">
            <h2>{task.title}</h2>
            <p>Statut : {task.status}</p>

            <button onClick={() => onDeleteTask(task.id)}>
                Supprimer
            </button>
        </article>
    );
}

export default TaskCard;