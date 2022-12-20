import LoginForm from '../components/users/loginForm';
import user from '../components/users/user';
import { DBMock } from '@todo/dbmock';
import { useNavigate } from 'react-router-dom';

interface props {
  updateUserState: (user: user) => void;
}

export default function Login({ updateUserState }: props) {
  const db = new DBMock();
  const navigate = useNavigate();

  async function handleLoginReceived(email: string, password: string) {
    if (!email || !password) {
      console.log('Login failed due to missing information');
      return;
    }
    const users = await db.getUserByEmail(email);
    if (users.length > 0 && users[0].password === password) {
      console.log('Login successful');
      updateUserState(users[0]);
      navigate('/');
      return;
    }
    console.log('Login failed');
  }

  return (
    <main>
      <h1>Login</h1>
      <LoginForm submitAction={handleLoginReceived} />
    </main>
  );
}
