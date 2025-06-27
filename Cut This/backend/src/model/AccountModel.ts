import {connect} from '../config/db'

export async function StoreAccount(conta_nome:string, conta_preco:number, user_id:number, conta_grupo:number){
    const conn = await connect()

    const [rows] = await conn.query('INSERT INTO CUT.conta (conta_nome, conta_preco, user_id, conta_grupo) values (?,?,?,?)', [conta_nome,conta_preco, user_id, conta_grupo])

    if(rows.lenght <=0){
            return null
        }
        else{
        const [result] = await conn.query('SELECT * FROM CUT.conta where conta_nome=(?) and user_id=(?)', [conta_nome, user_id])
        return result
        }
}
export async function DeleteAccount(conta_id:any){
    const conn= await connect()

    const [rows] = await conn.query('select * from cut.conta where conta_id=(?)', [conta_id])
    if(rows){
        try{
            const result = await conn.query('delete from cut.conta where conta_id=(?)', [conta_id])
            if(result.lenght <= 0){
                return false
            }   
            return true 
        }catch{(e:any)=> console.log(e);
    }
    }}
    export async function ShowAccount(conta_grupo:any){
    const conn= await connect()

    const [rows] = await conn.query(`
  SELECT conta.*, user.user_nome 
  FROM cut.conta
  JOIN cut.user ON user.id = conta.user_id
  WHERE conta_grupo = ?
`, [conta_grupo])

    
    if(rows.lenght <=0){return null}
    return rows
    
}