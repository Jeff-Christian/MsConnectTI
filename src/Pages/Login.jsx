import React from 'react';
import "../Styles/Login.css"

import msconnectlogin from "../assets/msconnectlogin.jpg";
import EmailIcon from "../assets/icons/Email-icon.png";
import PasswordIcon from "../assets/icons/PasswordIcon.png";
import LoginIcon from "../assets/icons/LoginIcon.png"

function Login() {
  return (
    <>
      <section className='mainContainer'>
        <div className='ImageContainer'>
          <img className='connectImage' src={msconnectlogin} alt="imagem ms connect parceira oficial vivo" />
        </div>
        <div className='LoginContainer'>
          <div className='loginForm'> 
            <h1>Olá, <br></br>
              Bem vindo</h1>
            <form action="" className='formLogin'>
              <div className='containerForm'>
                <input 
                type="text" 
                name="email" 
                id="email" 
                autoComplete='off' 
                placeholder=' ' />
                <label htmlFor="email" className='labelEmail'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                  Insira seu Email 
                </label>
              </div>
              <div className='containerForm'>
                <input 
                type="password"
                name="password" 
                id="password" 
                placeholder=' '/>
                <label htmlFor="password" className='labelPassword'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                  Insira sua Senha 
                </label>
              </div>
              <button className='loginButton' type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> Conecte-se
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
