import Image from "next/image";
import engine from "../../public/assets/engine.jpg";
import steering from "../../public/assets/steering.jpeg";
import pedals from "../../public/assets/pedals.jpg";
import battery from "../../public/assets/battery.jpg";
import tyres from "../../public/assets/tyres.jpeg";
import Link from "next/link";
import white from "../../public/assets/white.png";


export function Issue() {
  return (
    <div className="text-white my-5 mx-20 w-auto h-auto flex flex-col gap-y-3">
      <p className="text-2xl font-semibold mb-7">
        Click the Issue you are facing
      </p>

      <div className="flex flex-grow flex-col gap-y-5">

      <div className="flex flex-row gap-x-10 justify-between items-center">
        <div className=" h-full w-40 p-3">
          <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
            <Link href="\Solution">
            <Image src={engine} alt="engine" className="h-24 w-36 rounded-md" />
            <p>Engine</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image src={tyres} alt="tyres" className="h-24 w-36 rounded-md" />
            <p>Tyres</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image
              src={battery}
              alt="battery"
              className="h-24 w-36 rounded-md"
            />
            <p>Battery</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image
              src={steering}
              alt="steering"
              className="h-24 w-36 rounded-md"
            />
            <p>Steering</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image src={pedals} alt="pedals" className="h-24 w-36 rounded-md" />
            <p>Pedals</p>
            </Link>
          </div>
        </div>        
      </div>

      <div className="flex flex-row gap-x-10 justify-between items-center">
        <div className=" h-full w-40 p-3">
          <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
            <Link href="\Solution">
            <Image src={engine} alt="engine" className="h-24 w-36 rounded-md" />
            <p>Engine</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image src={tyres} alt="tyres" className="h-24 w-36 rounded-md" />
            <p>Tyres</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image
              src={battery}
              alt="battery"
              className="h-24 w-36 rounded-md"
            />
            <p>Battery</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image
              src={steering}
              alt="steering"
              className="h-24 w-36 rounded-md"
            />
            <p>Steering</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image src={pedals} alt="pedals" className="h-24 w-36 rounded-md" />
            <p>Pedals</p>
            </Link>
          </div>
        </div>        
      </div>

      <div className="flex flex-row gap-x-10 justify-between items-center">
        <div className=" h-full w-40 p-3">
          <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
            <Link href="\Solution">
            <Image src={engine} alt="engine" className="h-24 w-36 rounded-md" />
            <p>Engine</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image src={tyres} alt="tyres" className="h-24 w-36 rounded-md" />
            <p>Tyres</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image
              src={battery}
              alt="battery"
              className="h-24 w-36 rounded-md"
            />
            <p>Battery</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Solution">
            <Image
              src={steering}
              alt="steering"
              className="h-24 w-36 rounded-md"
            />
            <p>Steering</p>
            </Link>
          </div>
        </div>
        <div className="gap-y-1 flex flex-col h-full w-40 p-3 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-1 w-auto h-auto"> 
        <Link href="\Other">
            <Image src={white} alt="others" className="h-24 w-36 rounded-md" />
            <p>Others</p>
            </Link>
          </div>
        </div>        
      </div>

      </div>
    </div>
  );
}
