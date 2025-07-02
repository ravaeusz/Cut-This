"use client"
import {useEffect, useState} from 'react'
import {postLogin, postRegister} from '../../services/api'
import { redirect } from 'next/navigation'

import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../redux/store'


export default function Login() {

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isLogged = useSelector((state : RootState) => state.user.isLogged)
  const dispatch = useDispatch()

  const [user_nome , setUser_nome] = useState("")
  const [user_senha , setUser_senha] = useState("")
  const [error , setError] = useState(false) 
  const [errorlength , setErrorlength] = useState(false)
  const [message, setMessage] = useState("")
  const [statusMessage, setStatusMessage ] = useState<"sucess" | "error" | "">("")

  
  useEffect(() => {
  if(isLogged){
    redirect('/')
  }},[isLogged])
  
  async function handleRegister(e : any){
    e.preventDefault()
    try{

    if(!user_nome || !user_senha) {
    setError(true)
    return}

    if(user_senha.length < 5){
    setErrorlength(true)
    return}

    const data: any = await postRegister(user_nome, user_senha)
    if(data.error !== "Usuários já cadastrado"){console.log(data.error);
    }

    if(data.error){
    setMessage(data.error)
    setStatusMessage("error")
    return
    }

    if(data.sucess){
    setMessage(data.sucess)
    setStatusMessage("sucess")
    dispatch({
      type: "user/login",
      payload:  data.user_nome 
    })
    console.log(currentUser);
    
  }
}catch(e:any){console.log(e);
  }
  
}

  async function handleLogin(e:any){
    e.preventDefault()

    if(!user_nome || !user_senha) {
    setError(true)
    return}

    if(user_senha.length < 5){
    setErrorlength(true)
    return}

    const data: any = await postLogin(user_nome, user_senha)
    
    if(data.error){
    setMessage(data.error)
    setStatusMessage("error")
    }

    if(data.sucess){
    setMessage(data.sucess)
    setStatusMessage("sucess")
    dispatch({
      type: "user/login",
      payload:  data.user_nome 
    })
    }
  }

  return (
    <>
    <div className='flex justify-center my-5'>
    <p className={statusMessage === "sucess" ? 'text-green-500 text-[14px]': 'text-red-500 text-[14px]'}>
    {message} </p>
    </div>
    <div className="flex flex-row justify-center items-center my-15 gap-10 text-center max-md:flex-col">
        <div className="flex min-w-[200px] hover:bg-blue-100 bg-[#f3f8ff] p-[20px] flex-col w-[500px] h-[400px] max-md:w-[400px]">
            <h1 className="text-[26px] font-bold text-black  font-sans">Faça Login</h1>
            <div className="flex flex-rows justify-center items-center my-5 mb-5">
            <div className="w-[90%] h-[1px] bg-blue-500" ></div>
            </div>
            <form 
            onSubmit={handleLogin}
            className="flex flex-col gap-2" 
            action="/login" 
            method="POST"> 
            <label className="text-[16px] text-black  font-bold font-sans">Nome Completo:</label>
            <input 
            onChange={(e: any)=>{setUser_nome(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            name="user_nome" 
            type="text" />
            <label className="text-[16px] text-black  font-bold font-sans">Senha:</label>
            <input 
            onChange={(e: any)=>{setUser_senha(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            name="user_senha" 
            type="password" />
            {errorlength ? <p className='text-red-500 text-[14px]'>A senha precisa ter mais de 5 caracteres</p> : <></>}
            <button className= "hover:bg-blue-500 hover:text-white cursor-pointer text-blue-500 font-bold font-sans px-5 my-5 py-2 bg-white">ENTRAR</button>
            </form>
            {error ? <p className='text-red-500 text-[14px] my-5 '> Todos os campos são obrigatórios</p> : <></>}
        </div>
        <div className="flex min-w-[200px] hover:bg-blue-100 bg-[#f3f8ff] p-[20px] w-[500px] h-[400px] flex-col max-md:w-[400px]">
            <h1 className="text-[26px] font-bold text-black font-sans">Registre-se</h1>
            <div className="flex flex-rows justify-center items-center my-5 mb-5">
            <div className="w-[90%] h-[1px] bg-blue-500" ></div>
            </div>
            <form 
            className="flex flex-col gap-2" 
            onSubmit={handleRegister}
            action="/login" 
            method="POST"> 
            <label className="text-[16px] text-black  font-bold font-sans">Nome Completo:</label>
            <input 
            onChange={(e: any)=>{setUser_nome(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            type="text" />
            <label className="text-[16px] text-black  font-bold font-sans">Senha:</label>
            <input 
            onChange={(e: any)=>{setUser_senha(e.target.value)}}
            className="bg-blue-200 px-5 py-2" 
            type="password" />
            {errorlength ? <p className='text-red-500 text-[14px]'>A senha precisa ter mais de 5 caracteres</p> : <></>}
            <button type="submit" className="hover:bg-blue-500 hover:text-white cursor-pointer text-blue-500 font-bold my-5 font-sans px-5 py-2 bg-white">CADASTRAR</button>
            </form>
            {error ? <p className='text-red-500 text-[14px] my-5 '> Todos os campos são obrigatórios</p> : <></>}
            </div>
    </div>
    </>
  );
}
