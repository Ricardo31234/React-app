import { useEffect, useState } from "react";
import { supabase } from "./supabase/clientes";
import { TaskContextProvider } from "./context/TaskContext";
import Login from "./pages/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      {!session ? (
        <Login />
      ) : (
        <TaskContextProvider>
          <button onClick={() => supabase.auth.signOut()}>Cerrar Sesión</button>
          <TaskForm />
          <TaskList />
        </TaskContextProvider>
      )}
    </div>
  );
}

export default App;