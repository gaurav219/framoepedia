import logo from "./logo.svg";
import { useQuery } from "@apollo/client";

function Footer() {
  return (
    <footer className="max-w h-max py-6 max-auto bg-violet-500 container">
      {/* <nav className="max-w mx-auto"> */}
      <div className="h-max sm flex flex-row justify-evenly items-center">
        <a className="text-white" href="/">
          Contact Us
        </a>
        <a className="text-white" href="/">
          About
        </a>
        <a className="text-white" href="/">
          Location
        </a>
        {/* <a className="text-white" href="/"></a> */}
      </div>
      {/* </nav> */}
    </footer>
  );
}

export default Footer;
