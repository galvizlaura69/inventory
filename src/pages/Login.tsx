import { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";



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
    <div className="relative flex h-full items-center justify-center">
      <form action="">
        <div className="w-96">
          <h3 className="text-black  text-2xl  ">Iniciar Sesión</h3>
          <div className="border-b border-secondary border-w w-7 my-5"></div>
          <div className="flex  gap-6">
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Tu correo electrónico  "
              autoComplete="current-email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Clave"
              type="password"
              autoComplete="current-password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <Button
            className="rounded-full text-sm capitalize bg-primary w-60 py-3 font-normal flex items-center justify-center gap-2"
            ripple={true}
            onClick={() => handleSubmit()}
          >
            <p>Ingresar</p>
          </Button>
          <Link to="/register">Registrar cuenta</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
