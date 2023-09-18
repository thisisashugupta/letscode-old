export default function LoginPage(props) {
  return (
    <>
      <h1>Login</h1>
      <div>
        <form action="/login" method="POST" onSubmit={onSubmit}>
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">password</label>
          <input type="text" name="password" id="password" />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
