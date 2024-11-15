import { UserContext } from "../context/UserContext";
import { useContext } from "react";

 const useUsersContext = () => {

    const context = useContext(UserContext);

    if(!context){
        throw Error('useUserContext must be used inside an UsersContextProvider')
    }

    return context
}

export default useUsersContext