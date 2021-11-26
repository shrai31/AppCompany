import { GET_USERS } from './actionType';


const initialState ={
    users: [],
    user: {},
    loading: true
}


const usersReducer = (state=initialState, action)=>{

    switch(action.type){
        case GET_USERS:
        return{ 
            ...state,
            users: action.payload,
            loading : false,
            }
        
        default:
          return state;
    }
}


export default usersReducer