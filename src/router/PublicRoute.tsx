import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../auth/context/AuthContext';

type Props = {children: JSX.Element}

const PublicRoute = ({children}:any) => {
  const authcontext = useContext(AuthContext)
  return (!authcontext?.loggedIn) ? children : <Navigate to="/employees" />
}

export default PublicRoute