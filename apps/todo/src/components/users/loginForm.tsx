import { useState } from 'react';

interface props {
  submitAction: (email: string, password: string) => void;
}

export default function LoginForm({ submitAction }: props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitAction(email, password);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email
        <input type="text" value={email} onChange={handleEmailInputChange} />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
