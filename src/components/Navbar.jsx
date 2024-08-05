import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 h-20 " src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abdullah-fayyaz-44a546263/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AbdullahEnemy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ig_enemy_op"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
