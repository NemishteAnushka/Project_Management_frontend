import React from "react";
import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
      <br />
      <br />
      <footer>
        <div>footer</div>
      </footer>
    </>
  );
}

export default RootLayout;
