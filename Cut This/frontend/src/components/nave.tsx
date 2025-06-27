import Image from "next/image"

 export default function Nave() {
    
    const ativo : boolean = false

    return(
        <>
        <div className="flex justify-end items-center mr-7">
            {ativo ? <Image src={'/icon.png'} width={30} height={20} alt="icon"/>
            :
            <div></div>}
            {ativo ? 
            <h1 className="text-[18px] py-2 items-center">User</h1>
            :
            <a href="/login" className="text-[18px] p-2">Entrar / Registre- se</a>
        }
        </div>
        <div className="flex flex-rows justify-center items-center my-2">
        <div className="w-[90%] h-[100px] flex justify-center items-center bg-red-500">
            <h1 className="text-white">NAV</h1>
        </div>
        </div>
        </>
    )
 }