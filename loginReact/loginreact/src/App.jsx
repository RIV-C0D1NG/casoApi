import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menupag from './Menupage'
// estilos en linea 
const formStyles = {
  container: {
    maxWidth: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #c720b9',
    borderRadius: '5px',
  },
  input: {
    width: '95%',
    padding: '10px',
    margin: '5px 0 10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#8928a7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#b610c5',
  },
};

//definicion de funciones 
function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado,setLogueado] = useState(false)

  function cambiarUsuario(evento){
    setUsuario(evento.target.value)

  }
  function cambiarClave (evento){
    setClave(evento.target.value)

  }
  async function ingresar (){
   const peticion = await fetch('http://localhost:3000/login?usuariot='+usuario+'&clave='+clave,{ credentials: 'include'})
   if (peticion.ok){
    setLogueado(true)
   }
   else{
    alert('usuario o clave incorrecta')
   }
  }
  async function validar(){
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include'})
    if (peticion.ok) {
      setLogueado(true)
    }
  }
  useEffect(() => {
    validar()
  },[])
//sesion iniciada 
  if(logueado){

    return (
      <Menupag/>
    )
  }
  //iniciar sesion
  return (
    <>
       <div style={formStyles.container}>
      <h1>Inicio de sesión</h1>
      <input
        type="text"
        name="usuario"
        id="usuario"
        value={usuario}
        onChange={cambiarUsuario}
        placeholder="Usuario"
        style={formStyles.input}
      />
      <input
        type="password"
        name="clave"
        id="clave"
        value={clave}
        onChange={cambiarClave}
        placeholder="Contraseña"
        style={formStyles.input}
      />
      <button
        onClick={ingresar}
        style={formStyles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = formStyles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = formStyles.button.backgroundColor)}
      >
        Ingresar
      </button>
    </div>
    </>
  )
}

export default App
