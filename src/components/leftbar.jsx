import { Github } from "lucide-react";
import { Linkedin } from 'lucide-react';

export default function Leftbar() {
    return(
        <div className="border-2 border-white area-sidebar">
                <div className="p-20 h-[100%] flex items-center flex-col justify-between">

                    <div className="relative">
                        <a href="#" className="text-white font-bold text-[2rem]  after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 sm:text-[2.5rem] hover:after:origin-left hover:after:scale-x-100 transform">
                        Luís Gustavo
                        </a>
                    </div>
                    
                    <div className="flex gap-5 p-5">
                        <div className="">
                            <a className="rounded-[50%] w-15 h-15 flex items-center justify-center bg-gradient-to-tl from-black to-gray-800 dura hover:bg-gradient-to-tl hover:from-gray-950 hover:to-gray-900" href="https://github.com/DarkBJ" target="blank">
                            <Github color="#ffffff" width="25px" height="25px" />
                            </a>
                        </div>

                        <div className="">
                            <a className="rounded-[50%] w-15 h-15 flex items-center justify-center bg-gradient-to-tl from-black to-gray-800 dura hover:bg-gradient-to-tl hover:from-gray-950 hover:to-gray-900" href="https://www.linkedin.com/in/lu%C3%ADs-gustavo-santos-nascimento-32b12330a/" target="blank">
                            <Linkedin color="#ffffff" width="25px" height="25px" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}