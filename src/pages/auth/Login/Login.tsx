import "./Login.module.scss";

function Login() {
  return (<main>
    <form action="">
        <img src="./images/logo.svg" alt="notes logo" />
        <h1>Welcome to Note</h1>
        <p>Please log in to continue</p>

        <label htmlFor="email">Email Adress</label>
        <input id="email" type="email" placeholder="email@example.com"/>

        <label htmlFor="password">Password</label>
        <a href="">Forgot</a>
        <input id="password" type="password" />

        <button type="submit">Login</button>

        <div className="hl-separator"></div>

        <p>Or log in with:</p>
        <button>
            <img src="./images/icon-google.svg" alt="" />
            Google
        </button>

        <div className="hl-separator"></div>

        <p>
          <span>No account yet?</span>  
          <a href="">Sign Up</a>  
        </p>        
    </form>
    </main>);
}

export default Login;
