import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component }) => {
  const token = useSelector((state) => state.user.token);

  const isAuthenticated = token !== null && token !== undefined;
  // const isAuthenticated = true;

  return <>{isAuthenticated ? <Component /> : <Navigate to="/signin" />}</>;
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
