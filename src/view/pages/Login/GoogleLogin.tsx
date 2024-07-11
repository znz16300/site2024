import { useAuth } from '../../../data/api/AuthProvider';

function LoginPage() {
  const { login } = useAuth();
  // const navigate = useNavigate();
  const handleLogin = async () => {
    await login();
  };

  handleLogin();
  return null;
}

export default LoginPage;
