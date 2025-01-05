import React,{createContext,useState,useContext} from 'react'

const AuthContext = createContext();
export const AuthProvider =({children})=>{
const [isAuthenticated , setisAuthenticated] = useState(false);

const login = (token)=>{
    setisAuthenticated(true)
    localStorage.setItem('authToken',token)
}
const logout = ()=>{
    setisAuthenticated(false)
    localStorage.removeItem('authToken')
}
return(
<AuthContext.Provider value = {{isAuthenticated,login,logout}}>
    {children}
</AuthContext.Provider>
            
)
}
export const useAuth = ()=>useContext(AuthContext)