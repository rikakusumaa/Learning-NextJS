// components for the menu section of the page
import Image from "next/image";
import menu from "@/images/menu.svg";
import { FaChevronDown } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

export default function Menu() {
  return (
    <section className="sectionMenu">
    <button className="floating-button">
         <FaChevronDown href="/"/>
     </button>
    <div id="menu" className="menuContainer">
        <div className="containerTesti">
            <FaQuoteLeft size={30}className="quoteIcon"/>
            <p className="textTesti">Absolutely love this bakery! Everything is always fresh, delicious, and made with care. The perfect spot for a sweet treat!</p>
        </div>

        <div className="containerImgMenu">
            <Image
                src={menu}
                alt="Menu Image"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }} 
            />
        </div>

        <div className="containerTextMenu">
            <h1 className="hMenu">SWEETNESS DELIVERED IN EVERY BOX,</h1>
            <h1 className="hMenuSecondary">GUARANTEED</h1>
            <h1 className="hMenu">FRESH!</h1>

            <p className="pMenu">Sourdough ............... 1Pc</p>
            <p className="pMenu">Baguette ............... 1Pc</p>
            <p className="pMenu">Ciabatta ............... 2Pcs</p>
            <p className="pMenu">Focaccia ............... 2Pcs</p>

            <button className="btnMenu">Order Your Box Today! </button>
        </div>
    </div>

    <div className="USPContainer">
        <div className="USP1">
            <image></image>
            <p className="uspText">No Artificial Additives: Pure ingredients, real flavors.</p>
        </div>
        <div className="USP2">
            <image></image>
            <p className="uspText">Pure & Simple: Naturally fresh, nothing artificial.</p>
        </div>
        <div className="USP3">
            <image></image>
            <p className="uspText">No Synthetic Colors: Only natural, vibrant goodness.</p>
        </div>
        <div className="USP4">
            <image></image>
            <p className="uspText">Freshness Guaranteed: Baked daily, just for you.</p>
        </div>
    </div>
    </section>
  );
}