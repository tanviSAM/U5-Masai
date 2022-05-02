import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../Redux/Auth/action";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      checkAuth({
        auth: false,
        user: {},
      })
    );
    navigate("/");
  });
  return <></>;
};
