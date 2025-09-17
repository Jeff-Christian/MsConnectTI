import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";

import "../Styles/Login.css";
import msconnectlogin from "../assets/msconnectlogin.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, []); 

  const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    console.log("resposta do backend", res.data);
    

    if (res.status === 200 && res.data.token) {
      localStorage.setItem("token", res.data.token);
      console.log("Token salvo:", localStorage.getItem("token"));
      toast.success("Logado com sucesso!");
      navigate("/dashboard", { replace: true });
    } else {
      toast.error("Falha no login");
    }
  } catch (err) {
    console.error(err);
    toast.error("Erro ao tentar logar. Verifique suas credenciais.");
    
    if (err.response) {
      toast.error(err.response.data.message);
    }
  }
};

  return (
    <section className="mainContainer">
      <div className="ImageContainer">
        <img
          className="connectImage"
          src={msconnectlogin}
          alt="imagem ms connect"
        />
      </div>
      <div className="LoginContainer">
        <div className="loginForm">
          <h1>
            Olá, <br /> Bem vindo
          </h1>
          <form onSubmit={onSubmitHandler} className="formLogin">
            <div className="containerForm">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder=" "
              />
              <label className="labelLine" htmlFor="email">
                Insira seu Email
              </label>
            </div>
            <div className="containerForm">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder=" "
              />
              <label className="labelLine" htmlFor="password">
                Insira sua Senha
              </label>
            </div>
            <button className="loginButton" type="submit">
              Conecte-se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
