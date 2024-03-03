import './LoginView.scss';

function LoginView() {
  return (
    <>
      <div class="login-view">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginView;