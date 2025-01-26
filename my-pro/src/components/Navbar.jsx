import logo from "../assets/kevinRushLogo.png";
import{ FaLinkedin} from "react-icons/fa";
import{ FaGithub} from "react-icons/fa";
import{ FaSquareXTwitter} from "react-icons/fa6";
import{ FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" className="w-12 h-12" /> */}
        <h1 className="ml-2 text-xl font-bold text-gray-800 text-neutral-300">SR</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <a href="https://www.linkedin.com/in/sathwik-rao/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/sathwikrao4545" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  {/* <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a> */}
  <a href="https://twitter.com/SathwikraoV" target="_blank" rel="noopener noreferrer">
    <FaSquareXTwitter />
  </a>
</div>

    </nav>
  );
};

export default Navbar;
