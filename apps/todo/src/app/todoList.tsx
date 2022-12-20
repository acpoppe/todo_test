import { useNavigate } from 'react-router-dom';
import user from '../components/users/user';

interface props {
  user: user | null;
  handleLogout: () => void;
}

export default function TodoList({ user, handleLogout }: props) {
  const navigate = useNavigate();
  function handleLogoutClicked(e: React.MouseEvent) {
    e.preventDefault();
    handleLogout();
    navigate('/login');
  }

  return (
    <main>
      <h1>Todo List</h1>
      <a href="/" onClick={handleLogoutClicked}>
        Logout
      </a>
    </main>
  );
}
