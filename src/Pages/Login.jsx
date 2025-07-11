import React from 'react';
import "../Styles/Login.css"

import msconnectlogin from "../assets/msconnectlogin.jpg";
import EmailIcon from "../assets/icons/Email-icon.png";
import PasswordIcon from "../assets/icons/PasswordIcon.png";

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
                  <img src={EmailIcon} alt="icon email" />
                  Insira seu Email
                </label>
              </div>
              <div className='containerForm'>
                <input 
                type="text" 
                name="password" 
                id="password" 
                placeholder=' '/>
                <label htmlFor="password" className='labelPassword'>
                  <img src={PasswordIcon} alt="icon Password" />
                  Insira sua Senha
                </label>
              </div>
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
