import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((store) => store.auth.auth);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {auth === true ? (
          <Link className="nav-logout" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="nav-login" to="/login">
            Login
          </Link>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/neworder"
          element={
            <ProtectedRoute>
              <NewOrder />
            </ProtectedRoute>
          }
        ></Route>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;
