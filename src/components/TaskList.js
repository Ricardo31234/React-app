import { useEffect, useState } from "react";
import { useTask } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { task, getTask } = useTask();
  const [showDone, setShowDone] = useState(false);

  useEffect(() => {
    getTask(showDone);
  }, [showDone]);

  return (
    <div className="list-container">
      <div className="filter-tabs">
        <button 
          className={`tab-btn ${!showDone ? 'active' : ''}`} 
          onClick={() => setShowDone(false)}
        >
          Pendientes
        </button>
        <button 
          className={`tab-btn ${showDone ? 'active' : ''}`} 
          onClick={() => setShowDone(true)}
        >
          Hechas
        </button>
      </div>

      <div className="tasks-grid">
        {task.length === 0 ? (
          <p className="empty-text">No hay tareas en esta sección</p>
        ) : (
          task.map((t) => (
            <TaskCard key={t.id} t={t} showDone={showDone} />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;