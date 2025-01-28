import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [token, setToken] = useState(true); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(false); 
    navigate("/login"); 
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <img className="w-32 sm:w-44 cursor-pointer" src="/src/assets/logo.png" alt="" />
      </div>
      {token ? (
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Déconnexion
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Se connecter
        </button>
      )}
    </header>
  );
};

export default Header;
