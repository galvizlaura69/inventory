import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";

const Menu = () => {

  const location = useLocation();

  const isClientsRoute = location.pathname.includes("/clients");
  
  return (
    <div className="container_menu">
      <NavLink to="/users" className={({ isActive }) => isActive ? 'activeBtn' : 'button-menu'}>
        USUARIOS
      </NavLink>
      <div className="dropdown">
        <button className={isClientsRoute ? 'dropbtn-active' : 'dropbtn'}>CLIENTES</button>
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