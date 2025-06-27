export default function Login() {
  return (
    <>
    <div className="flex flex-row justify-center my-15 gap-10 text-center">
        <div className="flex bg-red-200 p-5 flex-col">
            <h1 className="text-[20px] font-bold">Faça Login</h1>
            <div className="flex flex-rows justify-center items-center my-5 mb-5">
            <div className="w-[90%] h-[1px] bg-black" ></div>
            </div>
            <form 
            className="flex flex-col gap-2" 
            action="/login" 
            method="POST"> 
            <label className="text-[16px]">Nome:</label>
            <input 
            className="bg-red-300 px-5 py-2" 
            name="user_nome" 
            type="text" />
            <label className="text-[16px]">Senha:</label>
            <input 
            className="bg-red-300 px-5 py-2" 
            name="user_senha" 
            type="password" />
            <button className= "cursor-pointer text-white px-5 py-2 bg-red-500">ENVIAR</button>
            </form>
        </div>
        <div className="flex bg-red-200 p-5 flex-col">
            <h1 className="text-[20px] font-bold">Registre-se</h1>
            <div className="flex flex-rows justify-center items-center my-5 mb-5">
            <div className="w-[90%] h-[1px] bg-black" ></div>
            </div>
            <form 
            className="flex flex-col gap-2" 
            action="/register" 
            method="POST"> 
            <label className="text-[16px]">Nome:</label>
            <input 
            className="bg-red-300 px-5 py-2" 
            name="user_nome"  
            type="text" />
            <label className="text-[16px]">Senha:</label>
            <input 
            className="bg-red-300 px-5 py-2" 
            name="user_senha" 
            type="password" />
            <button className="cursor-pointer text-white px-5 py-2 bg-red-500">ENVIAR</button>
            </form>
            </div>
    </div>
    </>
  );
}
