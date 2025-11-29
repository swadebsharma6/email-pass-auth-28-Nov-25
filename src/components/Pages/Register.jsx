import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";


const Register = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);

      const handleRegister =(e)=>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            // validate the password

            const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]){8}/;
            if(passwordRegExp.test(password) === false){
              setErrorMsg('Password must have a capital, smaller, and a special character');
              return;
            }

            // create user
            createUserWithEmailAndPassword(auth, email, password)
            .then(result =>{
              const createUser = result.user;
              console.log('create', createUser);
              // Reset
              setErrorMsg('');
              setSuccess('User created Successfully');
            })
            .catch(error =>{
              setErrorMsg(error.message);
              setSuccess('');
            })

            
      }

  return (
    <div>
      <div className="hero bg-base-200 min-h-[700px]">
        
          <form onSubmit={handleRegister} className="card bg-base-100  w-full mx-auto max-w-sm shadow-2xl">
             <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                  type={showPass ? 'text' : 'password'}
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <button
                onClick={()=> setShowPass(!showPass)}
                 className="btn btn-xs absolute top-2 right-6"> {
                  showPass ? <FaEyeSlash /> : <FaEye />
                 } 
                 </button>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input className="btn btn-neutral mt-4" type="submit"  value="Register" />
              </fieldset>
              
          <p className="text-center">Already have an account ? <Link to='/login'>Login</Link></p>
              {
            errorMsg && <p className="text-red-500 font-bold text-center">{errorMsg}</p>
          }
          {
            success && <p className="text-center text-primary font-bold">User has created successfully</p>
          }
            </div>
          </form>
           
        </div>
       
      </div>
   
  );
};

export default Register;
