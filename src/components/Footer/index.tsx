import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Manish Khulbe</h4>
      <div className="links">
        <Link href={"https://github.com/ManishKhulbe"}>
          <a target="_blank" aria-label="Link to GitHub">
            <FiGithub />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/manish-khulbe-83b46b20b/"}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=8979820182"}>
          <a target="_blank" aria-label="Link to contact via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  );
}
