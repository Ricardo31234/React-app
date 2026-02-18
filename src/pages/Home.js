import { supabase } from "../supabase/clientes";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div className="main-layout">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Supabase react</h1>
        <button 
          onClick={() => supabase.auth.signOut()}
          style={{ background: '#444', padding: '8px 15px', borderRadius: '8px' }}
        >
          Cerrar Sesión
        </button>
      </header>

      <section className="add-task-box">
        <h3 style={{ marginTop: 0, color: '#888' }}>Añadir Tarea</h3>
        <TaskForm />
      </section>

      <TaskList />
    </div>
  );
}

export default Home;