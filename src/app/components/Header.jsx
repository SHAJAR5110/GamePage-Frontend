import Image from "next/image";
import Link from "next/link";
import DarkMode from "./Darkmode";

export default function Head(){
    return(
        <div className="head">
            <Image src={'/gameLogo.png'} alt="game logo"
                height={80} width={80}  >

            </Image>
            <DarkMode/>
            <div className="headNavigation">
                <Link href={'/'} className="HeadLink">Home</Link>
                <Link href={'/game'} className="HeadLink">Game</Link>
                <Link href={'/about'} className="HeadLink">About</Link>
            </div>
        </div>
    );
}