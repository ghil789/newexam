import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { useLocation } from "react-router-dom";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <h1>
        {" "}
        <a
          href="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          {" "}
          <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 rounded-lg text-white">
            Exam Bank
          </span>
          Computer Scince{" "}
        </a>{" "}
      </h1>
      <form>
        <TextInput
          type="text"
          placeholder="Search course here"
          rightIcon={IoIosSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoIosSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <IoIosMoon />
        </Button>
        <a href="/Signin">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign in
          </Button>
        </a>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={"div"}>
          <a href="/">home</a>
        </NavbarLink>
        <NavbarLink active={path === "/About"} as={"div"}>
          <a href="/About">about</a>
        </NavbarLink>

        <NavbarLink active={path === "/Dashboard"} as={"div"}>
          <a href="/Dashboard">dashboard</a>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
