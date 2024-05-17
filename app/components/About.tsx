import Link from "next/link";

export function About() {
  return (
    <div className="w-screen h-full flex flex-col text-white pl-32 pr-32">
      <p className="text-2xl font-bold m-5">About Caristaniyan</p>
      <p className="text-justify leading-7 m-5">Caristaniyan, your one-stop solution for all your car troubles. We understand the frustration that comes with car problems, which is why we are here to help. At Caristaniyan, we offer a unique platform where you can input your cars issue and receive detailed text and video solutions to fix the problem. Our goal is to empower car owners with the knowledge and skills needed to tackle common car issues on their own, saving time and money on unnecessary trips to the mechanic. In cases where the issue is too complex or requires professional assistance, we provide contact information for trusted mechanics in your area. Our network of experienced mechanics is ready to assist you with any car problem, ensuring that your vehicle is back on the road safely and efficiently. Join our community today and say goodbye to car troubles!
      </p>

      <p className="pt-10 ml-5">Have a car issue?</p>
      <p className="ml-5 pt-2 pb-2">
        {" "}
        Click here <b>&rarr;</b>
        <button className="bg-slate-400 text-black p-1 mx-10 rounded-md text-xl font-extrabold bg-opacity-80 shadow-lg">
          <Link href="\Issues">Click Here</Link>
        </button>
      </p>
    </div>
  );
}
