import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ROLE = [
  {
    value: "trainee",
    label: "Trainee",
  },
  {
    value: "instructor",
    label: "Instructor",
  },
];

const STACK = [
  {
    value: "MERN",
    label: "MERN",
  },
  {
    value: "Python & Django",
    label: "Python & Django",
  },
  {
    value: "Data Science",
    label: "Data Science",
  },
];
const COHORT = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

function Signup(updateState) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [cohort, setCohort] = useState("");
    const [stack, setStack] = useState("");
console.log(role)
  const Signup = async (e) => {
      e.preventDefault();
      console.log("firstName", firstName);
      console.log("lastName", lastName);
      console.log("email", email);
      console.log("password", password);
      console.log("confirm", confirmPassword);
      console.log("role", role);
      console.log("cohort", cohort);
        console.log("stack", stack);

      const { data } = await axios.post("http://localhost:3000/user/createUser", {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          role,
            cohort,
            stack
      })

      console.log("Signup reponse", data)
      if (data.error) {
          return alert("invalid credentials")
      }
      return alert("Sucessfully Signed up")
  }
  return (
    <>
      <div className="w-screen bg-white flex justify-center">
        <div className="h-screen w-form  w-1/4 flex justify-center flex-col ">
          <div className=" flex flex-col my-5  fade-in  border border-gray-200 shadow-lg  bg-white p-4 rounded-lg">
            <div className="w-full flex justify-center mb-4 ">
              <p className="text-3xl font-semibold text-center text-blue-700 text-bold">Signup</p>
            </div>
            <form className="mt-6">
              <div className="inline-group mb-2 row-container ">
                <div className="row">
                  <div className="row-item">
                    <label className="block text-sm font-semibold text-blue-800">First Name</label>
                    <input
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                      type="text"
                      placeholder="Enter First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row-item">
                    <label className="block text-sm font-semibold text-blue-800">Last Name</label>
                    <input
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                      type="text"
                      placeholder="Enter Last Name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <label className="block text-sm font-semibold text-blue-800">Email</label>
              <input
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                type="email"
                placeholder="Abc@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <div className="inline-group mb-2 row-container">
                <div className="row">
                  <div className="row-item">
                    <label className="block mt-2 text-sm font-semibold text-blue-800">Password</label>
                    <input
                  className="block w-full px-4 py-2 mt-3 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                      placeholder="Enter password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row-item">
                    <label className="block text-sm mt-3 font-semibold text-blue-800">Confirm Password</label>
                    <input
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                      placeholder="Confirm password"
                      type="password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-sm font-semibold text-blue-800">Role</label>
                <Select
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  isSearchable={true}
                  options={ROLE}
                  onChange={(e) => {
                    setRole(e.value);
                  }}
                  isDisabled={false}
                  placeholder="Select Role"
                />
              </div>

              {role === "trainee" && (
                <div className="inline-group mb-2 row-container">
                  <div className="row">
                    <div className="row-item">
                      <label className="block text-sm font-semibold text-blue-800">Cohort</label>
                      <Select
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  isSearchable={true}
                        options={COHORT}
                        onChange={(e) => {
                          setCohort(e.value);
                        }}
                        isDisabled={false}
                        placeholder="Select Cohort"
                      />
                    </div>
                    <div className="row-item">
                      <label className="block text-sm font-semibold text-blue-800">Stack</label>
                      <Select
                  className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  isSearchable={true}
                        options={STACK}
                        onChange={(e) => {
                          setStack(e.value);
                        }}
                        isDisabled={false}
                        placeholder="Select Stack"
                      />
                    </div>
                  </div>
                </div>
              )}

              <p className="text-sm text-blue-950  mt-2">
                {"Already have an account?  "}
                <span
                  className="hover:text-indigo-500 text-blue-600 cursor-pointer hover:no-underline"
                  style={{ textDecoration: 'underline' }}
                  onClick={() => {
                    void updateState.updateState(true);
                  }}
                >
                  Login
                </span>
              </p>
              <div className="w-full p-4 flex justify-center mt-4">
                <button
                  className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md focus:outline-none ${
                    !email || !password
                      ? "bg-gray-300 cursor-not-allowed hover:outline-none"
                      : "bg-blue-700 hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-opacity-40"
                  }`}
                  onClick={(e)=>{Signup(e)}}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="w-full  bg-red-900"></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
