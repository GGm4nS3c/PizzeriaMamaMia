import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { IoMdLogOut } from "react-icons/io";

const CustomerProfile = () => {
  const [datoUsuario, setDatoUsuario] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (res.status === 200) {
          const data = await res.json();
          setDatoUsuario(data);
          setLoading(false);
        } else {
          alert("Error en la petición");
          navigate("/login");
        }
      } catch (error) {
        console.log(`error: ${error}`);
      }
    };

    getData();
  }, [navigate]);

  if (loading) return <h3 className="text-gray-200 text-center">Cargando datos...</h3>;

  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">Perfil de Usuario</h1>
      <p className="text-gray-300 text-sm mb-1">
        <strong>Email:</strong> {datoUsuario.email}
      </p>
      <p className="text-gray-300 text-sm">
        <strong>ID:</strong> {datoUsuario.id}
      </p>
      <button
        onClick={logout}
        className="gap-1 m-5 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <IoMdLogOut />
        Logout
      </button>
    </div>
  );
};

export default CustomerProfile;
