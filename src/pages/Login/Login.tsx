import { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import "./Login.css";



const Login = () => {

  let email = "galviz@gmail.com";
  let pass = 1234;
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);




  const handleSubmit = async () => {
    if (emailValue === email && passwordValue === pass.toString()) {
      console.log('Inicio de sesión exitoso');
      setRedirectToHome(true);
      navigate('/home');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center text-white  img_fondo">
      <div className='w-3/6' >
        <p className='message_login' >Siempre pensando en el futuro!</p>
        <span className='message_login'>Lo hacemos lo posible por ti.</span>
      </div>
      <div className='container_form '>
        <form className="w-full  h-full ">
          <h3 className="title_login">Iniciar Sesión</h3>
          <label>Correo electrónico</label>
          <input
            type="text"
            className='input_login'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            className='input_login'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <button
            className="mt-5 button_login"
            onClick={() => handleSubmit()}
          >
            <p>Ingresar</p>
          </button>
          {/* <Link to="/register">Registrar cuenta</Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
