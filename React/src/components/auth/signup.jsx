
import { useState, useEffect } from 'react';
import axios from 'axios';

function Signup(updateState) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  
  const Signup = async (e) => {
    e.preventDefault();
     
    try {
      const { data } = await axios.post("http://localhost:3000/user/createUser", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        role
      },
      {
        withCredentials: true,
      });
      if (data.error) {
        if (data.error.includes("Email already exists")) {
          return alert("Email already registered. Please use a different email.");
        } else {
          return alert("Invalid credentials");
        }
      }

      alert("Successfully Signed up");
      setSignupSuccess(true);
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  }

  useEffect(() => {
    if (signupSuccess) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");
    }
  }, [signupSuccess]);

  // Conditional rendering for redirection
  if (signupSuccess) {
    // You can replace this with your own logic for redirection
    return (
      <div>
        <p>Redirecting to sign-in page...</p>
        {/* Add your redirection logic here, e.g., setTimeout(() => window.location.href = '/signin', 2000) */}
      </div>
    );
  }

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col min-h-screen overflow-hidden w-screen bg-white">
        <div className="p-6 m-auto w-1/4 bg-white rounded-md shadow-xl ring-inset lg:max-w-xl border border-gray-200">
            <h1 className="text-3xl font-semibold text-center text-blue-700">
              Sign up
            </h1>
            <form className="mt-6">
              <div className="flex space-x-2">
                <div className="mb-2 w-1/2">
                  <label
                    className="block text-sm font-semibold text-blue-800"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First"
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={(e)=>{
                      setFirstName(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-2 w-1/2">
                  <label
                    className="block text-sm font-semibold text-blue-800"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last"
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={(e)=>{
                      setLastName(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  className="block text-sm font-semibold text-blue-800"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="hey@gmail.com"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-sm font-semibold text-blue-800">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-sm font-semibold text-blue-800"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                  }}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-sm font-semibold text-blue-800"
                >
                  Role
                </label>
                <select
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  value={role}  // Use the value prop to set the selected option
                >
                  <option value="" disabled>Select an option</option>
                  <option value="admin">Admin</option>
                  <option value="instructor">Instructor</option>
                  <option value="trainee">Trainee</option>
                </select>
              </div>

              <div className="mt-6">
                <button 
                  onClick={(e)=>{Signup(e)}}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Create Account
                </button>
              </div>
            </form>

            <p className="mt-8 text-sm font-light text-center text-blue-900">
              {" "}
              Already have an account?{" "}
              <span
                className="text-sm text-blue-500 hover:underline cursor-pointer underline"
                onClick={()=>{
                  void updateState.updateState(true);
                }}
              >Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
