// import { createUserWithEmailAndPassword } from "firebase/auth";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
// import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const authInfo = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="card bg-base-100 m-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Please Register !</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/*name field  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />
            {/*email field  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-yellow-400 underline"
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
