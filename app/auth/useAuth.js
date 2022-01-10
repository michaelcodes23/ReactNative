import { useContext } from "react"
import jwtDecode from "jwt-decode"

import authStorage from './storage'
import AuthContext from "./context"



export default useAuthorization = () => {
   const {user, setUser} = useContext(AuthContext)

   const logOut = () => {
        setUser(null);
        authStorage.removeToken();
   }

   const logIn = (authToken) => {
        //business logic of login
        const user = jwtDecode(authToken)
        console.log(user)
        setUser(user)
        authStorage.storeToken(authToken)
   }
   return {user,logOut, logIn, setUser}
}