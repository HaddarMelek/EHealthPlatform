import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 sm:px-10 md:px-32 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-32 sm:w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">ACCUEIL</li>
          <hr className="border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">TOUS LES MÉDECINS</li>
          <hr className="border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">À PROPOS</li>
          <hr className="border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden" />
        </NavLink>


       
            <NavLink to="/login">
              <li className="py-1 text-blue-300">Créer un compte ou se connecter </li>
              <hr className="border-none outline-none h-0.5 bg-blue-300 w-3/5 m-auto hidden" />
            </NavLink>
           
      </ul>

     
    </div>
  );
};

export default Navbar;
