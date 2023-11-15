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
      <div className='w-3/6'>
        <p >Siempre pensando en el futuro!</p>
        <span>Lo hacemos lo posible por ti.</span>
      </div>
      <div className='border-black border-2 flex h-3/6 '>
        <form className="w-90 bg-gray-600 h-full p-4">
          <h3 className="text-2xl  ">Iniciar Sesión</h3>
          <label>Correo electronico</label>
          <Input
            className="rounded-2xl font-manrope"
            color="bg-red-700"
            label="Tu correo electrónico  "
            autoComplete="current-email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <label>Contraseña</label>
          <Input
            className="rounded-2xl font-manrope"
            color="purple"
            label="Clave"
            type="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Button
            className="rounded-full bg-red-800 text-sm capitalize  w-60 py-3 font-normal flex items-center justify-center gap-2"
            ripple={true}
            onClick={() => handleSubmit()}
          >
            <p className='color-black'>Ingresar</p>
          </Button>
          {/* <Link to="/register">Registrar cuenta</Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
