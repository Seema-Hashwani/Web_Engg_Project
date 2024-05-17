import Image from "next/image";
import fb from "../../public/assets/fb.png";
import ig from "../../public/assets/ig.jpg";
import twitter from "../../public/assets/twitter.png";
import whatsapp from "../../public/assets/whatsapp.png";

export function Footer(){
    return(
        <div className="w-full h-28 bg-slate-800 mt-3 p-5 text-white flex flex-col justify-center items-center gap-y-5">
            
            <div>
              <p className="">Follow us on</p>  
            </div>

            <div className="flex flex-row gap-x-14">
                <Image src={whatsapp} alt="whatsapp" className="h-6 w-6 rounded-lg"/>
                <Image src={twitter} alt="twitter" className="h-6 w-6 rounded-lg"/>
                <Image src={fb} alt="fb" className="h-6 w-6 rounded-lg"/>
                <Image src={ig} alt="ig" className="h-6 w-6 rounded-lg"/>
            </div>

            

        </div>
    )
}