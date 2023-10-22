import { Sling as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  function home() {
    navigate("/");
    setOpen(false);
  }

  function handleHamburgerChange() {
    return setOpen((prev) => !prev);
  }
  function hide() {
    return setOpen(false);
  }

  return (
    <motion.nav
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 1, type: "spring" }}
    >
      <div className="nav-logo-box" onClick={home}>
        <motion.p
          className="nav-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <sub>dev</sub>
          Bolu
        </motion.p>
      </div>

      <div className="hamburger-box">
        <Hamburger
          size={25}
          color="#fff"
          toggled={isOpen}
          toggle={handleHamburgerChange}
        />
      </div>

      <motion.ul
        className={` ${isOpen ? "nav-box-expand" : "nav-box"}`}
        onClick={hide}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <li className={isOpen ? "nav-el-expand" : "nav-el"}>
          <NavLink
            to="customhook"
            end
            style={({ isActive }) => ({
              color: isActive ? "tomato" : "#F0F5F9",
              transition: "all 0.5s ease-in",
              textDecoration: "none",
            })}
          >
            Custom Hook
          </NavLink>
        </li>
        <li className={isOpen ? "nav-el-expand" : "nav-el"}>
          <NavLink
            to="errorpage"
            style={({ isActive }) => ({
              color: isActive ? "tomato" : "#F0F5F9",
              transition: "all 0.5s ease-in",
              textDecoration: "none",
            })}
          >
            Error 404
          </NavLink>
        </li>

        <li className={isOpen ? "nav-el-expand" : "nav-el"}>
          <NavLink
            to="errorboundary"
            style={({ isActive }) => ({
              color: isActive ? "tomato" : "#F0F5F9",
              transition: "all 0.5 ease-in",
              textDecoration: "none",
            })}
          >
            Error Boundary
          </NavLink>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
