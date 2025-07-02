
export default function GroupCreate() {
    return(
        <div className="flex justify-center">
        <div className="flex w-[250px] bg-red-200 text-center p-5 flex-col">
            <h1 className="text-[20px] font-bold">Crie uma Viagem ou Rolê </h1>
            <div className="flex flex-rows justify-center items-center my-5 mb-5">
            <div className="w-[90%] h-[1px] bg-black" ></div>
            </div>
            <form 
            className="flex flex-col gap-2" 
            action="/" 
            method="POST"> 
            <label className="text-[16px]">Nome:</label>
            <input 
            className="bg-red-300 px-5 py-2" 
            name="grupo_nome"  
            type="text" />
            <button className="cursor-pointer text-white px-5 py-2 bg-red-500">ENVIAR</button>
            </form>
            </div>
            </div>
    )
 }