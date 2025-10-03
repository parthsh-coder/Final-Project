import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    let role = localStorage.getItem('parth');
    return role === "true" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;