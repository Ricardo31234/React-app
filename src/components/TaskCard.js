import { useTask } from "../context/TaskContext";

function TaskCard({ t, showDone }) {
  const { deleteTask, updateTask, getTask } = useTask();

  const handleToggle = async () => {
    await updateTask(t.id, { done: !t.done });
    getTask(showDone);
  };

  const handleDelete = async () => {
    if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
      await deleteTask(t.id);
      getTask(showDone);
    }
  };

  return (
    <div className="task-card">
      <span style={{ textDecoration: t.done ? "line-through" : "none",display:"flex", justifyContent:"center" }}>
        {t.name}
      </span>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button onClick={handleToggle} style={{background: '#444'}}>
          {t.done ? "↩️" : "✔️"}
        </button>
        <button onClick={handleDelete} style={{background: '#dc3545'}}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TaskCard;