import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import Menu from './components/layouts/menu/Menu';
import Users from './pages/Users/Users';
import ClientsNat from './pages/Clients/ClientsNat';
import ClientsJur from './pages/Clients/ClientsJur';
import Products from './pages/Products/Products';
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Menu />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/clients/jur" element={<ClientsJur />} />
                <Route path="/clients/nat" element={<ClientsNat />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
