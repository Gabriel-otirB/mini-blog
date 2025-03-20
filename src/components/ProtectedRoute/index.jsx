import { Navigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

// Componente de proteção de rota
export function ProtectedRoute({ children, redirectTo }) {
  const { user } = useAuthValue(); 

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

export function GuestRoute({ children, redirectTo }) {
  const { user } = useAuthValue(); 

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children; 
}
