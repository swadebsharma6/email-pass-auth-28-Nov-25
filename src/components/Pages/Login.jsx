import { useRef, useState } from "react";
import auth from "../../firebase/firebase.config";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
        const [errorMsg, setErrorMsg] = useState('');
        const [success, setSuccess] = useState('');

        const emailRef = useRef();



          const handleLogin =(e)=>{
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
            signInWithEmailAndPassword(auth, email, password)
            .then(result =>{
              const loginUser = result.user;
              console.log('login', loginUser);
              if(!result.user.emailVerified){
                alert('Please verify your email address')
              }
              else{
                setSuccess('User login Successfully');;
              }
              // Reset
              setErrorMsg('');
              
              
            })
            .catch(error =>{
              setErrorMsg(error.message);
              setSuccess('');
            })

            
      }

      const handleForgetPassword =()=>{
         
          const email = emailRef.current.value;
          setErrorMsg('');

          // Send password reset email
          sendPasswordResetEmail(auth, email)
          .then(()=>{
            alert('A password reset email is send, please reset your password');
          })
          .catch(error =>{
            setErrorMsg(error.message);
          })
      }

      return (
             <div className="hero bg-base-200 min-h-[700px]">
                   
                     <form onSubmit={handleLogin} className="card bg-base-100  w-full mx-auto max-w-sm shadow-2xl">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
                       <div className="card-body">
                         <fieldset className="fieldset">
                           <label className="label">Email</label>
                           <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
                           <label className="label">Password</label>
                           <div className="relative">
                             <input
                             type= 'password'
                             className="input"
                             name="password"
                             placeholder="Password"
                           />
                           </div>
                           <div onClick={handleForgetPassword}>
                             <a className="link link-hover">Forgot password?</a>
                           </div>
                           <input className="btn btn-neutral mt-4" type="submit"  value="Login" />
                         </fieldset>
                         
                     <p className="text-center">No  account ? <Link to='/register'>Register</Link></p>
                        
                     {
                       success && <p className="text-center text-primary font-bold">User login successfully</p>
                     }
                     {
                       errorMsg && <p className="text-center text-red-500 font-bold">{errorMsg}</p>
                     }
                       </div>
                     </form>
                      
                   </div>
      );
};

export default Login;