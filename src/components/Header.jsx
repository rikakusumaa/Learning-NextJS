import Link from "next/link"
import Image from "next/image";
import logo from "@/images/golden.svg";

function Header() {
  return (
    <header className="header fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="header-container flex justify-center-safe p-5 mx-20">
          <nav>
            <div className="nav-links-1">
                <Link href="/about">ABOUT</Link>
                <Link href="/blog">BLOG PAGES</Link>
                <Link href="/menu">OUR MENU</Link>
            </div>
          </nav>
          <nav>
            <div className="logo"><a href="/">
                <Image src={logo} alt="Logo" className="logo-image" width={100} height={30} />
                </a></div>
          </nav>
          <nav>
            <div className="nav-links-2">
                <Link href="/membership">MEMBERSHIP</Link>
                <Link href="/services">SERVICES</Link>
                <Link href="/pages">PAGES</Link>
            </div>
          </nav>
        </div>
        </header>
  )
}

export default Header