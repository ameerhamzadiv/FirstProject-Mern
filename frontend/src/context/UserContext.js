import { createContext, useReducer } from 'react'

export const UserContext = createContext();

export const usersReduser = (state, action) => {
    switch(action.type){
        case 'SET_USERS':
            return {
                users: action.payload
            }
        case 'CREATE_USER':
            return {
                users: [action.payload, ...state.users]
            }
        case 'DELETE_USER':
            return {
                users: state.users.filter((u) => u._id !== action.payload._id)
            }
        default:
            return state    
    }
}

export const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(usersReduser, {users: null});

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            { children }
        </UserContext.Provider>
    )
}