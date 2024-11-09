import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import React from "react";


export default function DarkMode(){
    
    return(
        <div className="dark">
           <div className="darkMode">
            <FaMoon className="FaMoon" />
            <LuSunMoon className="LuSunMoon"/>
        
           </div>

        </div>
    );
    
}