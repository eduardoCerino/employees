import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../auth/context/AuthContext';

type Props = {children: JSX.Element|JSX.Element[];}

const PrivateRoute = ({children}:any) => {
  const authcontext = useContext(AuthContext)
  return (authcontext?.loggedIn) ? children : <Navigate to="/login" />
}

export default PrivateRoute