//components for more section of the page
import Image from "next/image";
import Imgmore from "@/images/more.svg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function More() {
    return (
        <section className="sectionMore" id="more">
            <h1 className="hMore">TURNING DOUGH INTO <br /> DELICIOUS FUN AND YUM!</h1>
            <div className="containerMore">
                <div className="containerImage">
                    <Image
                        src={Imgmore}
                        alt="Image"
                        style={{ width: "55%", height: "auto" }} 
                    />
                </div>
                <button className="btnMore">Explore Our Menu <BsArrowUpRightCircleFill /> </button>
            </div>
        </section>
    )
}