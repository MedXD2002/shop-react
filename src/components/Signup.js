import React from "react";
import { Link } from "react-router-dom";
import '../styles/util.css'
import '../styles/main.css'
const Signup = () => {
    return (
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <form class="login100-form validate-form p-l-55 p-r-55 p-t-178" method="POST" action="">
                        <span class="login100-form-title">
                            Sign Up
                        </span>

                        <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input class="input100" type="text" name="email" placeholder="Username"/>
                                <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input class="input100" type="text" name="email" placeholder="Email"/>
                                <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input class="input100" type="text" name="email" placeholder="Password"/>
                                <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Please enter password">
                            <input class="input100" type="password" name="mdp" placeholder="Repeat Password"/>
                                <span class="focus-input100"></span>
                        </div>
                        <br/>

                            <div class="container-login100-form-btn">
                                <button type="submit" class="login100-form-btn">Continue</button>
                            </div>

                            <div class="flex-col-c p-t-170 p-b-40">
                                <span class="txt1 p-b-9">
                                    Already a member?
                                </span>

                                <Link id='link' to="/Login" className='header-link'><a class="txt3">Log in</a></Link>
                            </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Signup