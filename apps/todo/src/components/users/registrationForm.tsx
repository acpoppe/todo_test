export default function RegistrationForm() {
  return (
    <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <label>Confirm Password</label>
      <input type="password" />
      <button type="submit">Register</button>
    </form>
  );
}
