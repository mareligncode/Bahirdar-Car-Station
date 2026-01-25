import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // SPECIAL CASE: Allow both admin types to access admin routes
    if (requiredRole === 'station_admin' && 
        (user?.role === 'station_admin' || user?.role === 'super_admin')) {
      return <>{children}</>;
    }
    
    // For all other cases, redirect based on actual role
    switch (user?.role) {
      case 'passenger':
        return <Navigate to="/passenger/dashboard" replace />;
      case 'driver':
        return <Navigate to="/driver/dashboard" replace />;
      case 'station_admin':
      case 'super_admin':
        return <Navigate to="/admin/dashboard" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}