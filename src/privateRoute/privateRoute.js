import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
    const { token } = useSelector( state => state.auth )
    return token ? children : <Navigate to="/login" />
}