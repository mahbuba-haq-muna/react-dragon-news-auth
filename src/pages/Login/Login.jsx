import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user);

            navigate(location?.state? (location.state): "/");
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className=" bg-slate-100">
            <Navbar></Navbar>
            <div className=" h-fit py-10">
                <h2 className="text-3xl text-center my-5">Login your account</h2>

                <div className="card bg-base-100 md:w-3/4 lg:w-1/2 mx-auto rounded-none">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-slate-100 rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-slate-100 rounded-none" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral  rounded-none">Login</button>
                        </div>
                    </form>
                    <p className="text-center pb-10">Dont’t Have An Account ? <span className=" text-red-500"><Link to={"/register"}>Register</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;