import { isAuthenticated } from "auth/authHelpers";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticatedUser = isAuthenticated();

  if (isAuthenticatedUser) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
