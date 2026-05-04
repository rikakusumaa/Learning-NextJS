import Image from "next/image";
import usp1 from "@/images/usp1.png";
import usp2 from "@/images/usp2.png";
import usp3 from "@/images/usp3.png"; 

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    <div className="heroContainer columns-2">
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
      <div className="heroImage">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
