
interface UserState {
    currentUser: [],
    isLogged: boolean;
}

const initialState : UserState ={
    currentUser: [], 
    isLogged: false
}

const userReducer = (state = initialState, action : any) => {
    if (action.type === 'user/login'){
        return {...state, currentUser: action.payload, isLogged: true}
    }
    if(action.type === 'user/logout'){
        return{...state, currentUser: null, isLogged : false}
    }
    return state
}
export default userReducer
