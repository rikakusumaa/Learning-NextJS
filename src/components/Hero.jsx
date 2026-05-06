// components for Hero section of the page
import Image from "next/image";
import usp1 from "@/images/usp1.png";
import usp2 from "@/images/usp2.png";
import usp3 from "@/images/usp3.png"; 
import hero from "@/images/hero.svg";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroContainerText">
        <div className="flex items-left gap-7 items-baseline">
          <h1 className="heroText">BAKING</h1>
          <h2 className="subText">ENDLESS</h2>
        </div>
        <h1 className="heroText">HAPPINESS</h1>
        <h1 className="heroText">FOR EVERY</h1>
        <div className="flex items-left gap-10 items-baseline">
          <h1 className="heroText">HEART.</h1>
          <h2 className="subText">TASTE THE JOY!</h2>
        </div>
        <div className="uspContainer columns-3 gap-7 break-after-column">
          <div className="usp1 columns-2 flex justify-center items-center gap-4">
            <Image src={usp1} alt="USP 1" width={55} height={55} />
            NO ARTIFICIAL COLORS ADDED
          </div>
          <div className="usp2 columns-2 flex justify-center items-center gap-4">
            <Image src={usp2} alt="USP 2" width={55} height={55} />
            NO ARTIFICIAL FLAVORS ADDED
          </div>
          <div className="usp3 columns-2 flex justify-center items-center gap-4">
            <Image src={usp3} alt="USP 3" width={55} height={55} />
            NO CHEMICALS IN OUR BAKE
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <Image
          src={hero}
          alt="Hero Image"
          width={800}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}