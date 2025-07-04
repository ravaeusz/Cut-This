import bcrypt from 'bcrypt';
import {connect} from '../config/db'


export async function StoreRegister(user_nome:string, user_senha:string) {
    const conn = await connect();

    const [rows] = await conn.query('SELECT * FROM cut.USER WHERE user_nome= (?)', [user_nome])

    if(rows.length > 0) return null;

    const salt = bcrypt.genSaltSync(10);
    const passwordCript = bcrypt.hashSync(user_senha, salt)

    conn.query('INSERT INTO CUT.USER (user_nome, user_senha) VALUES (?,?)', [user_nome, passwordCript])
    const [result] = await conn.query('SELECT * FROM cut.USER WHERE user_nome= (?)', [user_nome])
    return result[0]
}

export async function StoreLogin(user_nome: string, user_senha:string){
    const conn = await connect();

    const [rows] = await conn.query('select * from cut.user where user_nome=(?)', [user_nome]);
    
 
    const passwordCompare = await bcrypt.compare(user_senha, rows[0].user_senha);
    
    if(!passwordCompare){
    return null
    }

    return rows[0]
}

export async function ShowUsers(){
    const conn = await connect();

    const [rows] = await conn.query('SELECT * FROM USER')
    return rows
}
