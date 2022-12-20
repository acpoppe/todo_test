import { Navigate } from 'react-router-dom';
import user from '../components/users/user';

interface props {
  userState: { user: user | null };
  children: JSX.Element;
}

export default function PrivateRoute({ userState, children }: props) {
  if (
    !userState.user ||
    userState.user === undefined ||
    Object.keys(userState.user).length === 0
  ) {
    return <Navigate to="/login" />;
  }

  return children;
}
