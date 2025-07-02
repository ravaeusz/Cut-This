import {connect} from '../config/db'

export async function StoreGroup(grupo_nome:string, user_id:number){
    const conn = await connect();

    const [rows] = await conn.query('INSERT INTO CUT.grupo (grupo_nome, grupo_user) VALUES (?,?)', [grupo_nome, user_id])
    
    if(rows.length <=0){
        return null
    }
    else{
    const [result] = await conn.query('SELECT * FROM CUT.grupo WHERE grupo_nome=(?) and grupo_user=(?)', [grupo_nome, user_id])
    return result
    }
    
}

export async function DeleteGroup(group_id: any){
    const conn = await connect();

    const [result] = await conn.query('SELECT * FROM CUT.grupo WHERE grupo_id=(?)',[group_id])
    
    if(result){

        try{
            const [rows] = await conn.query('DELETE FROM CUT.grupo WHERE grupo_id=(?)', [group_id])       
            if(rows.length <= 0){
                return false
            }   
            return true 
            
        }
        catch{((e : any) => console.log(e))};
        
}}

export async function UpdateGroup(group_id: any, nome: string, user_id: number){
    const conn = await connect();

    try{
        const [rows] = await conn.query('UPDATE CUT.grupo SET grupo_nome=(?), grupo_user=(?) where grupo_id=(?)', [nome, user_id, group_id])
        if(rows.length <= 0){
                return false
            }   
            return true 

    }catch{(e : any) => console.log(e);
    }
}

export async function GetGroup(){
    const conn = await connect();

    try{
        const [rows] = await conn.query('SELECT grupo.grupo_nome, user.user_nome FROM CUT.grupo JOIN cut.user ON user_id = grupo.grupo_user')
        return rows

    }catch{(e: any) => {console.log(e)};}
}

export async function UserGroup(group_id: number, user_id: number){
    const conn = await connect();

    try{
        const [rows] = await conn.query('INSERT INTO CUT.grupo_user (user_id, grupo_id) VALUES (?,?)', [user_id, group_id])
        if(rows.length <= 0){
                return false
            }   
            return true 


    }catch{(e: any) => console.log(e);
    }
}
export async function ShowGroup(group_id: any){
    const conn = await connect();

    try{
        const [rows] = await conn.query("select * from cut.grupo where group_id=(?)", [group_id])
         if(rows.length <= 0){
                return false
            }   
            return true

    }catch{(e: any)=>{console.log(e);
    }}
}
