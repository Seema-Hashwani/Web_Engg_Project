import Link from "next/link";

export function Solution(){
    return(
        <div className="flex flex-col pr-32 pl-32 text-white">
            <p className="text-xl font-bold py-5">Issue Name</p>
            <p className="text-lg font-bold pb-1">Manual solution you can do:</p>
            <p className="pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aspernatur odio voluptate voluptatem incidunt. Aliquid accusamus totam mollitia voluptatum quibusdam labore ipsum magni consectetur error. Sapiente aspernatur minima quisquam laboriosam veritatis quod, quam facere? Asperiores veniam beatae cupiditate modi aspernatur fugiat, recusandae aperiam officiis placeat atque corrupti porro deserunt natus perferendis soluta, doloremque culpa consequatur. Repudiandae perspiciatis nemo nesciunt, ipsa ipsum quos quaerat delectus nisi voluptate exercitationem voluptas blanditiis voluptates tempora iusto aperiam reprehenderit, magnam ipsam, laboriosam laborum quas deleniti hic quia! Neque saepe itaque voluptatem, nemo sapiente praesentium adipisci est, corrupti sunt, maxime id laudantium blanditiis tenetur vitae dignissimos! Assumenda nemo porro delectus molestias dolore quisquam odit doloremque harum ipsum reiciendis voluptatibus magnam autem, et ab at atque eveniet, magni soluta, ipsam officia? Voluptates quas cumque omnis cum blanditiis. Cupiditate mollitia aliquid exercitationem repellat accusamus illum quae eum inventore magnam molestiae! Architecto ducimus nesciunt nobis temporibus, quasi qui voluptas!</p>
            <p className="text-lg font-bold pb-1">Video Demonstration:</p>
            <div className="bg-slate-200 w-auto h-96 mx-32 mt-4"></div>
            <p className="pt-8 pb-2">Can not do it by yourself?</p>
            <p>Click here <b>&rarr;</b> <button className="bg-slate-400 text-black p-1 mx-10 rounded-md text-xl font-extrabold bg-opacity-80 shadow-lg">
                <Link href="Mechanic">Get a mechanic</Link>
                </button></p>
        </div>
    )
}