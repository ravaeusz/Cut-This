import { Request, Response } from 'express';

import {StoreRegister, StoreLogin, ShowUsers} from '../model/LoginModel'

export const registerController = async (req: Request, res: Response) =>{
   const {user_nome, user_senha} = req.body

   if(!user_nome || !user_senha){
    res.json({"error":"Todos os campos são obrigatórios"})
   }
   if(user_senha.length < 5){
    res.json({"error":"A senha precisa ter mais de 5 digitos"})     
   }

   const rows = await StoreRegister(user_nome, user_senha)
   if (!rows){
    res.json({"error":"Usuários já cadastrado"})
   }
   res.json(
    {
       "sucess":"Usuário cadastrado!" 
    }
   )
}  

export const loginController = async (req: Request, res: Response) => {
   const {user_nome, user_senha} = req.body

   if(!user_nome || !user_senha){
    res.json({"erro":"Todos os campos são obrigatórios"})
   }
   
   const rows = await StoreLogin(user_nome, user_senha)
      if (!rows){
    res.json({
      "error":"Usuário não encontrado, tente novamente!" 

    })
   }
   res.json(
    {
      "sucess":"Usuário logado!" 
    }
   )
}  

export const userController = async ( req: Request, res: Response) => {
   const rows = await ShowUsers();

   if(rows.length <= 0){
      res.json({"error":"Nenhum usuário encontrado"})
   }
   res.json({
      rows
   })
}


