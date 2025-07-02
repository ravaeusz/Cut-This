import { Request, Response } from 'express';
import {StoreGroup, DeleteGroup, UpdateGroup, GetGroup, UserGroup, ShowGroup} from '../model/GroupModel'

export const groupController = async (req: Request, res: Response) =>{
    const {grupo_nome, user_id} = req.body

    const result = await StoreGroup(grupo_nome, user_id)
    
   if (!result){
    res.json({"error":"Grupo já cadastrado"})
   }
   res.json(
    {
        result,
       "sucess":"Grupo cadastrado!" 
    }
   )
}

export const deleteGroupController = async (req: Request, res: Response) => {
    const group_id  = req.params.id

    const rows = await DeleteGroup(group_id)

    if(!rows){
        res.json({"error":"Não foi possivel excluir grupo"})
    }
    res.json({"sucess":"Grupo excluido!" })
 
}
export const updateGroupController = async (req: Request, res: Response) => {
    const group_id = req.params.id;
    const {grupo_nome, user_id} = req.body

    const rows = await UpdateGroup(group_id, grupo_nome, user_id)
    if(!rows){
        res.json({"error":"Não foi possivel editar grupo"})
    }
    res.json({"sucess":"Grupo editado!" })
}
export const showGroupsController = async (req: Request, res: Response) =>{
    const groups = await GetGroup()

    if(groups.length <= 0 || groups === undefined){
        res.json({"error":"Não foi possivel localizar grupos"})
    }
    res.json({groups})
}

export const EnterGroup = async (req: Request, res: Response) =>{
    const {group_id , user_id} = req.body

    const rows = await UserGroup(group_id , user_id)
    res.json({rows})
    
}

export const ShowGroupController = async (req: Request, res: Response) =>{
    const group_id = req.params.id

    const rows = await ShowGroup(group_id)
    res.json({rows})
}