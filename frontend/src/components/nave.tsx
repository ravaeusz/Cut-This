import Image from "next/image"

import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../redux/store'




 export default function Nave() {

    const {currentUser, isLogged} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()
    const logo = "< cut.this >"
    
    const handleLogout = () => {
    dispatch({ 
      type: "user/logout"
    })
    }

    return(
        <>
        <div className="flex justify-between mr-5 ml-5 my-2 items-center border-b border-blue-500">
        <div className="flex flex-rows justify-center items-center my-2 ">
            <div className="w-[250px] h-[80px] bg-blue-400 flex justify-center items-center rounded-4xl max-md:w-[200px]">
            <p className="text-[30px] font-sans font-bold text-white max-md:text-[30px]">{logo}</p>
            </div>

        </div>
        <div className="mr-5 ml-5 ">
            {isLogged ? 
            <div className="flex flex-rows gap-5 items-center max-md:flex-col max-md:gap-1">
            
            <h1 className="text-[20px] text-blue-400 font-bold font-sans py-2 items-center max-md:text-[14px]">{currentUser.user_nome}</h1>
           
            <button onClick={handleLogout} className="cursor-pointer text-[20px] text-blue-400 font-bold font-sans py-2 items-center max-ms:text-[14px]">Sair</button>
            </div>
            :
            <a href="/login" className="text-[18px] text-blue-400 font-bold font-sans p-2">Entrar / Registre- se</a>
        }
        </div>
        </div>
        </>
    )
 }