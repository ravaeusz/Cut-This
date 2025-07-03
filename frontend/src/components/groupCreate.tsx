import {useState} from 'react'

import {useDispatch} from 'react-redux'

export default function GroupCreate() {

    const [grupo_nome, setGrupo_nome] = useState("")
    const [grupo_inicio, setGrupo_inicio] = useState("")    
    const [grupo_fim, setGrupo_fim] = useState("")


    return(
        <div className="flex justify-center">
        <div className="flex min-w-[400px] bg-blue-100 text-center p-[20px] flex-col">
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
            onChange={(e: any)=>{setGrupo_nome(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            name="grupo_nome"  
            type="text" />
            <label className="text-[16px]">Data início:</label>
            <input 
            onChange={(e: any)=>{setGrupo_inicio(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            name="grupo_nome"  
            type="date" />
            <label className="text-[16px]">Data final:</label>
            <input 
            onChange={(e: any)=>{setGrupo_fim(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            name="grupo_nome"  
            type="date" />
            <button 
            type='submit'
            className="cursor-pointer font-bold text-blue-500 px-5 py-2 bg-white hover:bg-blue-400 hover:text-white">ENVIAR</button>
            </form>
            </div>
            </div>
    )
 }