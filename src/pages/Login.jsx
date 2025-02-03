import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { validateFieldsLogin } from "../utils/submitValidator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");

    const validationResult = validateFieldsLogin(email, password);
    if (validationResult !== true) {
      setError(validationResult);
      return;
    }

    try {
      await login(email, password);
      setMessage("Autenticación exitosa");
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10 flex flex-col"
    >
      <h2 className="text-xl font-bold text-gray-200 mb-4">Iniciar sesión</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {message && <p className="text-green-500 text-sm">{message}</p>}

      <label className="text-gray-300">Correo electrónico</label>
      <input
        type="email"
        className="p-2 rounded bg-gray-700 text-white mb-3"
        placeholder="correo@example.com"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="text-gray-300">Contraseña</label>
      <input
        type="password"
        className="p-2 rounded bg-gray-700 text-white mb-3"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default Login;
