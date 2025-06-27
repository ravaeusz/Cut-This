"use client"

import Image from "next/image";
import {useState} from 'react'

import GroupCreate from '../components/groupCreate'

export default function Home() {

  const [ativo , setAtivo] = useState(false)

  function handleCreateGroup(){
    setAtivo(true)
  }

  return (
    <div>
      <div className="mb-20px">
      <h1>Criar um grupo</h1>
      <button onClick={handleCreateGroup} className="cursor-pointer text-white px-5 py-2 bg-red-500">CRIAR</button>
      </div>
      {ativo ? <GroupCreate /> : <h1>Olá</h1>}
    </div>
  );
}
