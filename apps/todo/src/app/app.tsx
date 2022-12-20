import styled from 'styled-components';
import TodoList from './todoList';
import Login from './login';
import Register from './register';
import PrivateRoute from './privateRoute';
import user from '../components/users/user';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StyledApp = styled.div`
  // Your style here
`;

interface userStateDef {
  user: user | null;
}

export function App() {
  const [userState, setUserState] = useState<userStateDef>({
    user: null,
  });

  function handleLogout() {
    setUserState({ user: null });
  }

  function updateUserState(user: user) {
    setUserState({ user: user });
  }

  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute userState={userState}>
                <TodoList user={userState.user} handleLogout={handleLogout} />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={<Login updateUserState={updateUserState} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
