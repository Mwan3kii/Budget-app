import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/LoginUser";

const Aside = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate("/category");
  };

  const handleLogout = async () => {
    // Add confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      try {
        // Dispatch logout action
        await dispatch(logout());
        // Redirect to login page
        navigate("/login");
      } catch (error) {
        // Handle errors gracefully
        console.error("Logout failed:", error);
        alert("Logout failed. Please try again later.");
      }
    }
  };

  return (
    <aside className="side-bar">
      <ul className="pl-1" style={{ marginLeft: "1px" }}>
        <li>
          <span className="material-symbols-outlined">manage_accounts</span>
          <Link to="#">Profile</Link>
        </li>
        <button onClick={handleAddCategory} className="btn btn-info ml-1 p-2">
          Add New Category
        </button>
        <li className="logout-bar">
          <NavLink
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            onClick={handleLogout}
            data-te-dropdown-item-ref
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
