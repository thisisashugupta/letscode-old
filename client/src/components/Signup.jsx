export default function SignupPage(props) {
  return (
    <>
      <h1>Signup</h1>
      <div>
        <form action="/signup" method="POST" onSubmit={onSubmit}>
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
