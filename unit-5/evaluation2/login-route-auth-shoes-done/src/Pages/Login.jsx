import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
      login_failure_func,
      login_req_func,
      login_success_func,
} from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router";

const Login = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const handlesubmit = (e) => {
            e.preventDefault();
            const payload = {
                  email: "eve.holt@reqres.in",
                  password: "cityslicka",
            };
            dispatch(login_req_func());
            axios.post("https://reqres.in/api/login", payload)
                  .then((res) => dispatch(login_success_func(res.data.token)))
                  .then(() => navigate(-1, { replace: true }))
                  .catch(() => dispatch(login_failure_func()));
      };
      return (
            <div>
                  <h2>LOGIN</h2>
                  <form>
                        <div>
                              <label>User Email</label>
                              <br />
                              <input
                                    data-cy="login-email"
                                    defaultValue={"eve.holt@reqres.in"}
                              />
                        </div>
                        <div>
                              <label>User Password</label>
                              <br />
                              <input
                                    data-cy="login-password"
                                    defaultValue={"cityslicka"}
                              />
                        </div>
                        <button
                              type="submit"
                              data-cy="login-submit"
                              onClick={handlesubmit}
                        >
                              Loading
                        </button>
                  </form>
            </div>
      );
};

export default Login;
