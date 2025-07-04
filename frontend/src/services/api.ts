import axios from 'axios';

//METODO PARA REGISTRO e LOGIN
export async function postRegister(user_nome: string, user_senha: string) {
    const response = await axios.post('http://localhost:3001/register', {user_nome, user_senha});
    return response.data;   
}
export async function postLogin(user_nome: string, user_senha: string) {
    const response = await axios.post('http://localhost:3001/login', {user_nome, user_senha});
    return response.data;   
}

//METODO PARA GRUPOS
export async function getGroup(){
    const response = await axios.get('http://localhost:3001/grupo')
    return response.data
}
export async function storeGroup(grupo_nome:string, user_id:number, grupo_inicio:string, grupo_final:string) {
    const response = await axios.post('http://localhost:3001/grupo', {grupo_nome, user_id, grupo_inicio, grupo_final})
    return response.data
}