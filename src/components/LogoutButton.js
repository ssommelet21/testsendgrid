import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const goLogout = () => {
    logout();
    console.log("Logout !");
  };

  return isAuthenticated && <button onClick={() => goLogout()}>Log Out</button>;
};

export default LogoutButton;
