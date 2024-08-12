import { GET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from '../actions/userActions';

const initialState={
    users:[]
}

const userReducer=(state=initialState,action)=>{
    switch(actiom.type){
        case GET_USERS:{
            return{...state,users:action.payload};
           
        }
        case CREATE_USER:
            return{
                ...state,
                users:[...state.users,action.payload]
            }
            case UPDATE_USER:
                return {
                    ...state,
                    users:state.users.map((user)=>{
                        user.id===action.payload.id?action.payload:user
                    })
                }
                case DELETE_USER :
                    return {
                        ...state,
                        users:state.users.filter((user)=>user.id!=action.payload)
                    }
                    default:
                        return {
                            state
                        }
        }
        
    }
export default userReducer
