import React, { useState } from "react";
import { login } from "../methord/login";
import { aqaiLogo } from "../module/image_logo";

function Login({ route }) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  return (
    <React.StrictMode>
      <div className="li1_a"></div>
      <div className="li1_b">
        <div className="li1_ba">
          <div className="li1_baa">
            <img width="150" src={aqaiLogo} />
            {/* <div className="li1_baaa">LOGO</div> */}
            <div className="li1_baab">Log in to your account</div>
            <form onSubmit={(e) => login(e, setloading, seterror)}>
              <input
                required
                id="id"
                className="li1_baac"
                placeholder="Username"
              />
              <input
                required
                id="pass"
                className="li1_baac"
                type="password"
                placeholder="Password"
              />
              <div className="cm1_error center">{error}</div>
              <button
                style={{ background: loading ? "gray" : "" }}
                disabled={loading}
                type="submit"
                className="li1_baad"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {/* <div className="li1_bb">Can't log in?</div> */}
        <div className="li1_bc"></div>
      </div>
    </React.StrictMode>
  );
}

export default Login;
