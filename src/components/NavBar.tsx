import { NavLink } from "react-router-dom";
import CustomButton from "./Button";

const NavBar = () => {
  return (
    <nav className="flex-between-center container h-16 leading-none">
      <ul className="flex-center gap-2">
        <li>
          <NavLink to="/dashboard">
            <CustomButton
              icon={
                <img
                  src="/icons/dashboard.svg"
                  className="aspect-square w-3 md:w-5"
                />
              }
            >
              Dashboard
            </CustomButton>
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-book">
            <CustomButton
              icon={
                <img
                  src="/icons/add.svg"
                  className="aspect-square w-3 md:w-5"
                />
              }
            >
              Add Book
            </CustomButton>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
