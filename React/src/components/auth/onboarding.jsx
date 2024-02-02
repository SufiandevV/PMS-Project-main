import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Navigate, useLocation } from "react-router-dom";

const Onboarding = (updateState) => {
  const [instructors, setInstructors] = useState("");
  const [instructor, setInstructor] = useState([]);
  const [requestSent, setRequestSent] = useState(false);
  const location = useLocation();
  const userId = location.state.userId;

  const getAllInstructors = async () => {
    await axios
      .get("http://localhost:3000/user/getAllInstructor")
      .then((res) => {
        console.log(res);
        const list_arr = res.data.response.map((elem) => ({
          value: elem.userId,
          label: [elem.firstName, elem.lastName].join(" "),
        }));
        setInstructors(list_arr);
      });
  };

  const onboarding = async (e) => {
    e.preventDefault();

    // Check if the request has already been sent
    if (requestSent) {
      alert("Your request has already been sent. Please wait for approval.");
      return;
    }

    const { data } = await axios.post("http://localhost:3000/user/onbaording", {
      instructorId: instructor,
      userId,
    });
    console.log("data ", data);

    // Update state to indicate that the request has been sent
    setRequestSent(true);

    alert("Your request has been sent. Please wait for approval.");

    // Redirect to home page
    Navigate("/");
  };

  useEffect(() => {
    getAllInstructors();
  }, []);

  return (
    <div>
      <div className="flex overflow-x-hidden">
        <div className="flex flex-col min-h-screen w-screen bg-white overflow-x-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-lg shadow-lg lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-blue-700 text-bold">
              Onboarding
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label className="block text-sm font-semibold text-blue-800">
                  Select Instructor
                </label>
                <Select
                  className="bg-white  rounded-lg mb-2 focus:outline-none text-black font-medium"
                  isSearchable={true}
                  options={instructors}
                  onChange={(e) => {
                    setInstructor(e.value);
                  }}
                  isDisabled={false}
                  placeholder="Select Role"
                />
              </div>
              <div className="mt-6">
                <button
                  onClick={(e) => {
                    onboarding(e);
                  }}
                  className="w-full px-4 py-2 tracking-wide bg-blue-700 text-white
                    transition-colors duration-200 transform rounded-md focus:outline-none"
                >
                  Submit
                </button>
                {/* <p className="mt-8 text-xs font-light text-center text-gray-700">
                  {" "}
                  Back to{" "}
                  <span
                    className="font-medium text-blue-600 hover:underline cursor-pointer"
                    style={{ textDecoration: "underline" }}
                    onClick={() => {
                      void updateState.updateState(true);
                    }}
                  >
                    Log in
                  </span>
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
