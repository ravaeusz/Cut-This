"use client"


interface Grupos {
  user_nome: string,
  grupo_user: number,
  grupo_id : number,
  grupo_nome : string
  grupo_inicio: string,
  grupo_final:string
}

import {useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState } from '../redux/store'

import {getGroup} from '../services/api'

import GroupCreate from '../components/groupCreate'

export default function Home() {

  const [ativo , setAtivo] = useState(false)
  const [grupos, setGrupos]  = useState<Grupos[]>([])


  const isLogged = useSelector((state : RootState) => state.user.isLogged)

  function handleCreateGroup(): void{
    setAtivo(true)
  }

  const buscarGrupos = async () => {
      try{
      const data : any = await getGroup()
      setGrupos(data.groups);
      }
      catch(e){console.log(e)}
    }
  
  return (
    <>
    { isLogged ? 
    <div>
    <div className="">
      <div className=" mt-2 flex flex-row items-center justify-between mx-10 mb-20px">
      <button onClick={buscarGrupos} className="cursor-pointer rounded-4xl text-blue-500 font-bold px-5 py-2 bg-white hover:bg-blue-400 hover:text-white">Grupos ativos</button>
      <button onClick={handleCreateGroup} className="cursor-pointer rounded-4xl text-blue-500 font-bold px-5 py-2 bg-white hover:bg-blue-400 hover:text-white">Criar um Grupo</button>
      </div>
      {ativo ? <GroupCreate onFinish={() => setAtivo(false)} /> :
      <div className="flex flex-col justify-center items-center mt-10">
        {grupos?.map((grupo)=> (
        <div key={grupo.grupo_id} className="flex w-[80%] flex-row justify-between cursor-pointer rounded-4xl text-white font-bold px-5 py-2 bg-blue-400 hover:bg-white hover:text-blue-400 hover:border-2 mb-5 mt-5">
        <div >
        <div className='flex flex-col items-center gap-3'>
        <p >{grupo.grupo_nome}</p>
        <p className="text-[8px]">Criado por: {grupo.user_nome}</p>
        </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
        <p className='text-[14px]'>Duração:</p>
        <p className='text-[12px]'>{grupo.grupo_inicio.split('-').reverse().join('-')}</p>
        <p className='text-[12px]'>até</p>
        <p className='text-[12px]'>{grupo.grupo_final.split('-').reverse().join('-')}</p>
        </div>

        <button className="cursor-pointer hover:text-green-400 ">Entrar</button>
        </div>
        ))}
      </div>}
    </div>

    </div>
    :
    <div>
    <h1 className="text-[50px] text-blue-200 flex justify-center mt-30">Opss sem acesso</h1>
    <p className="text-[20px] text-blue-200 flex justify-center">Você precisa estar logado!</p>
    </div>
  }
    </>
  );
}
