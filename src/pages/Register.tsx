import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Register = () => {


  const handleSubmit = async () => {
    console.log("Registrando");
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <form action="">
        <div className="w-96">
          <h3 className="text-black  text-2xl  ">Registrar Cuenta</h3>
          <div className="border-b border-secondary border-w w-7 my-5"></div>
          <div className="flex  gap-6">
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Nombres"
              autoComplete="current-name"
            />
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Apellidos"
              autoComplete="current-last-name"
            />
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Correo electrónico"
              autoComplete="current-email"
            />
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
            />
            <Input
              className="rounded-2xl font-manrope"
              color="purple"
              label="Verificar Contraseña"
              type="password"
              autoComplete="current-password-verificate"
            />
          </div>
          <Button
            className="rounded-full text-sm capitalize bg-primary w-60 py-3 font-normal flex items-center justify-center gap-2"
            ripple={true}
            onClick={() => handleSubmit()}
          >
            <p>Registrar</p>
          </Button>
          <Link to="/">Ya tienes una cuenta?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
