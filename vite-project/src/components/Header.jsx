import { Navbar, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
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
        />
      </form>
    </Navbar>
  );
};

export default Header;
