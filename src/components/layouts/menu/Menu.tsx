import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const Menu = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const isClientsRoute = location.pathname.includes("/clients");

  const handleCloseSesion = async () => {
    navigate('/');

  };

  return (
    <div className="container_menu">
      <div className="logo-menu"> <img src="" alt="logo" /></div>
      <div className="links-menu">
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
        <button className="button-menu" onClick={() => handleCloseSesion()}>
          <FontAwesomeIcon icon={faLock} className="w-4 h-4 mr-2" />
        </button>
      </div>
    </div>
  );
};

export default Menu;