import { NavLink } from "react-router-dom";
import './Navbar.css'
import Logo from "./Logo";
const Navbar = () => {
    const links =
    <>
        <li>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "chill" : ""
            }
            >Home</NavLink>
        </li>
        <li>
        <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "chill" : ""
            }
            >Donation</NavLink>
        </li>
        <li>
        <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "chill" : ""
            }
            >Statistics</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 px-5 sm:px-[10%] pt-5">
  <div className="mr-auto">
    <p className="btn btn-ghost normal-case text-xl h-10"><Logo/></p>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
</div>
    );
};

export default Navbar;