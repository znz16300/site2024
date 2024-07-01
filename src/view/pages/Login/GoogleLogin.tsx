/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/no-cycle
// import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { useAuth } from '../../../data/api/AuthProvider';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login();
    if (success) {
      // window.location.href = `${window.location.origin}/`;
      navigate('/');
      // eslint-disable-next-line no-console
      console.log('44444');
    }
  };

  handleLogin();

  return null;

  // return (
  //   <div className={classes.loginWrapper}>
  //     <Header page={page} />
  //     <section className={classes.login}>
  //       <h2>Login</h2>
  //       <button onClick={handleLogin}>Login with Google</button>
  //     </section>
  //     <Footer />
  //   </div>
  // );
}

export default LoginPage;
