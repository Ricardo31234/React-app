import { useState } from "react";
import { supabase } from "../supabase/clientes";
import { useTask } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { getTask } = useTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Intentando guardar tarea:", taskName);
    
    const { data: { user } } = await supabase.auth.getUser();

    const result = await supabase.from('task').insert({
      name: taskName,
      userid: user.id 
    });

    if (result.error) {
      console.error("❌ Error en el INSERT:", result.error.message);
    } else {
      console.log("✅ Tarea guardada correctamente:", result);
      setTaskName("");
      getTask(); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Añadir</button>
    </form>
  );
}

export default TaskForm;