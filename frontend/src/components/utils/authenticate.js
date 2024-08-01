import { useSelector } from "react-redux";
export const authenticate = (navigate, isAuthenticated) => {
    if (!isAuthenticated) {
      navigate('/user/login');
    } else {
      navigate('/home')
    }
  };
  