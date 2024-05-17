import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";


export function Other() {
  return (
    <div className=" mx-40 my-5 p-5 mb-72 flex flex-col justify-center items-center gap-y-3">
        <p className="font-bold text-white">Enter your issue here</p>
        <input type="text" className="border-black text-black border-2 h-24 w-3/4"></input>
        <Link href="\Solution">
        <button className="bg-slate-100 text-black w-20 rounded-lg p-2 font-bold">Search</button>
        </Link>

    </div>
  );
}
