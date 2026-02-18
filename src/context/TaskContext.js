import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/clientes";

export const TaskContext = createContext();
export const useTask = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  
  const getTask = async (done = false) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
      .from("task")
      .select("*")
      .eq("userid", user.id)
      .eq("done", done) 
      .order("id", { ascending: false });

    if (error) console.error(error);
    else setTask(data);
  };


  const updateTask = async (id, updateFields) => {
    const { error } = await supabase
      .from("task")
      .update(updateFields)
      .eq("id", id);

    if (error) console.error(error);
    
  };

  const deleteTask = async (id) => {
    await supabase.from("task").delete().eq("id", id);
    
  };

  return (
    <TaskContext.Provider value={{ task, getTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};