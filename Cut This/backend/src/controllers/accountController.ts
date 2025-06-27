import { Request, Response } from 'express';
import {StoreAccount, DeleteAccount, ShowAccount} from '../model/AccountModel'

export const storeAccountController = async (req: Request, res: Response) =>{
    const {conta_nome, conta_preco, user_id, conta_grupo} = req.body

    if (!conta_nome || !conta_preco || !user_id || !conta_grupo) {
    res.status(400).json({ "error": "Todos os campos são obrigatórios" });
}
    
    const rows = await StoreAccount(conta_nome, conta_preco, user_id, conta_grupo)
    if(rows === null){
        res.json({"error":"Houve um erro ao criar conta"})
    }
    res.json({rows})
}

export const deleteAccountController = async (req: Request, res: Response) =>{
    const conta_id = req.params.id

    const rows = await DeleteAccount(conta_id)
    if(!rows){
        res.json({"error":"Não foi possivel excluir grupo"})
    }
    res.json({"sucess":"Grupo excluido!" })
}

export const showeAccountController = async (req: Request, res: Response) =>{
    const conta_grupo = req.params.conta_grupo
    try{
        const rows = await ShowAccount(conta_grupo)
        if(rows === null){res.json({"error":"Não foi possivel excluir grupo"})}

        res.json({rows});
    }catch{(e: any) => console.log(e);
    }
}
