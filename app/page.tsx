"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Content from "@/components/Content";
import About from "@/components/About";

export default function Home() {
  const [isLinkSelected, setIsLinkSelected] = useState(0);
  return (
    <div>
      <div className={cn("py-2 w-full bg-gradient-to-b from-[#08B9D1] via-[#267AEA] to-[#7831F3]")}>
        <p className={cn("font-bold text-white text-center text-lg uppercase")}>
        Canva Creator Application  
        </p>
      </div>
      <div className={cn("py-6 px-4 space-y-8", "md:px-6")}>
        <div className={cn("flex flex-col gap-2 mt-6")}>
          <Image
            src="/images/sbz.jpg"
            alt={"picture of me"}
            width={1080}
            height={1080}
            className={cn("rounded-full size-[7rem]")}
          />
          <h1 className={cn("text-2xl font-semibold", "md:text-[32px]")}>Selim Baouz</h1>
          <div className={cn("flex items-center gap-2 text-sm")}>
            <p className={cn("text-white/60")}>@selimbaouz</p>
            <p className={cn("text-white/60")}>Pending validation</p>
          </div>
          <div className={cn("grid grid-cols-2 w-full items-center gap-2", "md:w-max")}>
            <Button asChild color="primary" size="lg" className={cn("text-white mt-2 cursor-pointer", "lg:text-base")}>
              <Link 
                href="https://www.linkedin.com/in/selimbaouz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile
              </Link>
            </Button>
            <Button asChild size="lg" variant="link" className={cn("text-white mt-2 border cursor-pointer", "lg:text-base")}> 
              <Link 
                href="mailto:selim.baouz@hotmail.fr" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2">
                <svg stroke="currentColor" fill="currentColor" className="-rotate-90" strokeWidth="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"></path></svg>
                Contact
              </Link>
            </Button>
          </div>
        </div>
        <div className={cn("flex items-center gap-8")}>
          {[
            {
              title: "Content"
            }, 
            {
              title: "About"
            }
          ].map((data, i) => (
            <button key={i} onClick={() => setIsLinkSelected(i)} className={cn("cursor-pointer text-sm font-semibold p-2", "lg:text-base", isLinkSelected === i ? "text-white border-b-[3px] border-primary" : "text-white/60")}>{data.title}</button>
          ))}
        </div>
        {isLinkSelected === 0 ? <Content /> : <About />}
      </div>
    </div>
  );
}
