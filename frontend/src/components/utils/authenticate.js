export const authenticate = (navigate) => {
    const isAuthenticated = false; // just for testing
    if (!isAuthenticated) {
      navigate('/user/login');
    }
  };
  