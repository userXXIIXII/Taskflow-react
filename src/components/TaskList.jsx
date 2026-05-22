import TaskCard from "./TaskCard";

function TaskList({ tasks, onDeleteTask }) {
    if (tasks.length === 0) {
        return <p>Aucune tâche pour le moment</p>
    }

    return (
        <section className="task-list">
            {tasks.map((task) => (
                <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                />
            ))}
        </section>
    );
}

export default TaskList;