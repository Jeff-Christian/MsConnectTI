import './App.css'

import msconnectlogin from "../src/assets/msconnectlogin.jpg";
import EmailIcon from "../src/assets/icons/Email-icon.png";

function App() {

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
              <input type="text" name="email" id="email" autoComplete='off' placeholder=' ' />
              <label for="email" htmlFor="">
                <img src={EmailIcon} alt="icon email" />
                Insira seu Email
              </label>
              <input type="text" name="password" id="password" placeholder='Insira sua senha'/>
              <button type='submit'>Login</button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
