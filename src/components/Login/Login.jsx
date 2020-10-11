import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.scss";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.kumulos.com/wp-content/uploads/2013/08/amazon-logo-preview.png"
          alt=""
        />
      </Link>
      <div className="login__body">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn}>Sign In</button>
        </form>

        <p>
          Lorem,FAKE AMAZONE CLONE consectetur adipisicing elit. Adipisci
          repudiandae voluptas mollitia error vel eius, id voluptate corporis?
          BY BK DEV minus hic.
        </p>
        <button onClick={register}>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
