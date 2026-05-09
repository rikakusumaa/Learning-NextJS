import Image from "next/image";
import logo from "@/images/logo2.svg";

function Footer() {
  return (
    <footer className="footer">
        <Image src={logo} alt="Logo" width={100} height={50} />
        <p>&copy; 2026 All Right Reserved.</p>
    </footer>
  )
}

export default Footer