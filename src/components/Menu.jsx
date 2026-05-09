// components for the menu section of the page
"use client";
import Image from "next/image";
import menu from "@/images/menu.svg";
import usp1 from "@/images/non-toxic.svg";
import usp2 from "@/images/free.svg";
import usp3 from "@/images/coloring.svg";
import usp4 from "@/images/leaf.svg";
import { FaChevronDown } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiEyesFill } from "react-icons/pi";

export default function Menu() {
  return (
    <section className="sectionMenu">
    <button className="floating-button">
         <a href="#menu"><FaChevronDown /></a>
     </button>
    <div id="menu" className="menuContainer">
        <div className="containerTestiImg">
            <div className="containerTesti">
                <FaQuoteLeft size={40}className="quoteIcon"/>
                <p className="textTesti">Absolutely love this bakery! <br/>Everything is always fresh,
                   <br/>delicious, and made with care. <br/> The perfect spot for a <br/>sweet treat!</p> 
            </div>

            <div className="containerImgMenu">
                <Image
                    src={menu}
                    alt="Menu Image"
                    style={{ width: "100%", height: "auto" }} 
                />
            </div>
        </div>

        <div className="containerTextMenu">
            <h1 className="hMenu">SWEETNESS DELIVERED IN EVERY BOX,</h1>
            <h1 className="hMenuSecondary">GUARANTEED</h1>
            <h1 className="hMenu">FRESH!</h1>

            <div className="lineMenu">
                <p className="pMenu">Sourdough ............................................ 1Pc <br />
                Baguette ............................................... 1Pc <br />
                Ciabatta .............................................. 2Pcs<br />
                Focaccia .............................................. 2Pcs</p>

                <button className="btnMenu">Order Your Box Today! <BsArrowUpRightCircleFill /> </button>
            </div>
        </div>
    </div>

    <div className="USPContainer">
        <div className="USP">
            <Image src={usp1} style={{ width: "40px", height: "auto" }} alt="Non-Artificial" />
            <p className="uspText">No Artificial Additives: Pure ingredients, real flavors.</p>
        </div>
        <div className="USP">
            <Image src={usp2} style={{ width: "40px", height: "auto" }} alt="Pure & Simple" />
            <p className="uspText">Pure & Simple: Naturally fresh, nothing artificial.</p>
        </div>
        <div className="USP">
            <Image src={usp3} style={{ width: "40px", height: "auto" }} alt="No Synthetic Colors" />
            <p className="uspText">No Synthetic Colors: Only natural, vibrant goodness.</p>
        </div>
        <div className="USP">
            <Image src={usp4} style={{ width: "40px", height: "auto" }} alt="Fresh"/>
            <p className="uspText">Freshness Guaranteed: Baked daily, just for you.</p>
        </div>
    </div>

    <div className="CTAContainer">
        <button className="btnCTA"> <PiEyesFill size={20}/> Check out how we made our favorite bread! </button>
    </div>
    </section>
  );
}