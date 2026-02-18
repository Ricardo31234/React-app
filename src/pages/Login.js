import { useState } from "react";
import { supabase } from "../supabase/clientes";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({ email });
      alert("Revisa tu correo para el enlace de acceso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button>Enviar Magic Link</button>
      </form>
    </div>
  );
}

export default Login;