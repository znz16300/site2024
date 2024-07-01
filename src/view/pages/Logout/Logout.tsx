/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { useAppContext } from '../../../App';
import { useAuth } from '../../../data/api/AuthProvider';

function Logout() {
  const { setState } = useAppContext();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setState((prevState) => ({ ...prevState, userLoggedIn: false, user: null }));
  };

  const goToMain = () => {
    navigate('/');
  };

  handleLogout();
  goToMain();

  return null;
}

export default Logout;
