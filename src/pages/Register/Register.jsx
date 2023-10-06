import { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const{createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className=" bg-slate-100">
                <Navbar></Navbar>
                <div className=" h-fit py-10">
                    <h2 className="text-3xl text-center my-5">Register your account</h2>

                    <div className="card bg-base-100 md:w-3/4 lg:w-1/2 mx-auto rounded-none">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-slate-100 rounded-none" required />
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered bg-slate-100 rounded-none" required />
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
                                <button className="btn btn-neutral  rounded-none">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;