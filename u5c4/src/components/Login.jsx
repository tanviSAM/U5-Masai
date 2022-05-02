import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);

  const handleLogin = () => {
    getData();
  };
  const userRedirect = () => {
    if (auth.user.role === "admin") {
      navigate("/orders");
    } else if (auth.user.role === "client") {
      navigate("/neworder");
    } else {
      alert("Invalid Login Creds");
    }
  };
  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getData = () => {
    axios.get("http://localhost:8080/users").then((data) => {
      const found = data.data.find(
        (e) => e.username === user.username && e.pass === user.password
      );
      if (found === undefined) {
        console.log("User not found");
      } else {
        dispatch(
          checkAuth({
            auth: true,
            user: found,
          })
        );
        userRedirect();
      }
    });
  };
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleUser}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleUser}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
