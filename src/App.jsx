import './App.css'

import msconnectlogin from "../src/assets/msconnectlogin.jpg"

function App() {

  return (
    <>
      <section className='mainContainer'>
        <div className='ImageContainer'>
          <img className='connectImage' src={msconnectlogin} alt="imagem ms connect parceira oficial vivo" />
        </div>
        <div className='LoginContainer'>
          <div className='loginForm'> 
            <h1>Olá, Bem vindo</h1>
            <form action="" className='formLogin'>
              <input type="text" name="email" id="email" placeholder='Insira seu email' />
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
