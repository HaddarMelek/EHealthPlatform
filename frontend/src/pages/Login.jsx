import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [state, setState] = useState("S'inscrire");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate(); 

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin"); 
    } else if (email === "doctor@gmail.com" && password === "doctor") {
      navigate("/doctor");
    } else if (email === "patient@gmail.com" && password === "patient") {
      navigate("/patient");
    } else {
      alert("Invalid email or password! Please try again."); 
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "S'inscrire" ? "Créer un compte" : "Se connecter"}
        </p>
        <p>
          Veuillez{" "}
          {state === "S'inscrire" ? "vous inscrire" : "vous connecter"} pour
          prendre rendez-vous.
        </p>
        {state === "S'inscrire" && (
          <div className="w-full ">
            <p>Nom et prénom</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)} 
              value={name}
              required
            ></input>
          </div>
        )}

        <div className="w-full ">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required
          ></input>
        </div>

        <div className="w-full ">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            required
          ></input>
        </div>

        <button className="bg-blue-300 text-white w-full py-2 rounded-md text-base ">
          {state === "S'inscrire" ? "Créer un compte" : "Se connecter"}
        </button>
        {state === "S'inscrire" ? (
          <p>
            Vous avez déjà un compte ?{" "}
            <span
              onClick={() => setState("Se connecter")}
              className="text-primary underline cursor-pointer"
            >
              Se connecter
            </span>{" "}
          </p>
        ) : (
          <p>
            Créer un nouveau compte ?{" "}
            <span
              onClick={() => setState("S'inscrire")}
              className="text-primary underline cursor-pointer"
            >
              Cliquez ici
            </span>
          </p>
        )}
      </div>
    </form>
  );
};
