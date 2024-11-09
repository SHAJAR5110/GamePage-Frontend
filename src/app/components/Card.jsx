'use client'
import Image from "next/image";
import Link from "next/link";
import {obj} from "./Data";
import {useRouter} from "next/navigation";
export default function Card(){
    return(
    <div className='Card' >
    {obj.map((item, index) => {
        return(
            <DataItems data={item} key={index}></DataItems>
        );
    })}
    
    </div>
);
}

function DataItems({data}){
    const router=useRouter();
    
    return(
        
        <div className="InsideCard">
        <Image src={data.img}  alt={data.alt}
               height={250}
               width={250} className="CImage"></Image>
    
            <Link href={'/game'}>How to play</Link>
            <Link href={data.btn} className="CBtn">Play</Link>
            
        </div>
    );
}