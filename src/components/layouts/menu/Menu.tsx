import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container_menu">
      <NavLink to="/users" className={({ isActive }) => isActive ? 'activeBtn' : 'button-menu'}>
        USUARIOS
      </NavLink>
      <div className="dropdown">
        <button className="dropbtn">CLIENTES</button>
        <div className="dropdown-content">
          <NavLink to="/clients/nat" className={({ isActive }) => isActive ? 'activeBtn' : 'button-menu'}>
            Cliente Natural
          </NavLink>
          <NavLink to="/clients/jur" className={({ isActive }) => isActive ? 'activeBtn' : 'button-menu'}>
            Cliente Jurídico
          </NavLink>
        </div>
      </div>
      <NavLink to="/products" className={({ isActive }) => isActive ? 'activeBtn' : 'button-menu'}>
        PRODUCTOS
      </NavLink>
      <button className="button-menu">X</button>
    </div>
  );
};

export default Menu;