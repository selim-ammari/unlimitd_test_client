import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import USER_ROLES from 'src/constants/userRoles';
import useAuth from 'src/hooks/useAuth';

const UserRoot = () => {
  const { isInitialized, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isInitialized) {
      if (user?.role === USER_ROLES.ADMIN) navigate('/admin', { replace: true });
      if (user?.role === USER_ROLES.USER) navigate('/user', { replace: true });
    }
  }, [isInitialized, user, navigate]);
  return null;
};

export default UserRoot;
