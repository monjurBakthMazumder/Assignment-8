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
                isPending ? "pending" : isActive ? "active" : ""
            }
            >Home</NavLink>
        </li>
        <li>
        <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            >Donation</NavLink>
        </li>
        <li>
        <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            >Statistics</NavLink>
        </li>
    </>
    return (
        <div className="flex justify-between items-center px-5 sm:px-[10%] py-5">
  <div className="mr-auto">
    <NavLink to={'/'} className="normal-case text-xl"><Logo/></NavLink>
  </div>
  <div className="hidden lg:flex">
    <ul className="flex items-center gap-5">
      {links}
    </ul>
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="flex flex-col gap-1 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
        {links}
      </ul>
    </div>
</div>
    );
};

export default Navbar;