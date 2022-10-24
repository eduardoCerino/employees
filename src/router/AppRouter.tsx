import React, { useContext } from 'react'
import EmployeesPage from '../employess/pages/EmployeesPage';
import { Route, Routes, HashRouter } from 'react-router-dom';
import UploadPage from '../upload/pages/UploadPage';
import HomePage from '../home/pages/HomePage';
import NavBar from '../ui/components/NavBar';
import LoginPage from '../auth/pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  //const {loggedIn} = useContext(AuthContext)

  return (
    <>
        <NavBar/>
        
        <Routes>
           <Route path="/*" element={<HomePage/>} />
            <Route path="/login" element={ <PublicRoute> <LoginPage/> </PublicRoute>} />
            <Route path="/employees" element={ <PrivateRoute> <EmployeesPage/> </PrivateRoute>} />
            <Route path="/upload" element={ <PrivateRoute><UploadPage /></PrivateRoute>} />
        </Routes>
    </>
  )
}

export default AppRouter