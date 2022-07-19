import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Creator() {
  const [modal, setModal] = useState(false);
  const [errmodal, setErrModal] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    phone: "",
  });

  const submitHandler = () => {
    axios
      .post(
        "https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/users/",
        data
      )
      .then((res) => {
        setModal(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        setErrModal(true);
      });
  };
  return (
    <>
      <div className="text-center absolute w-full">
        {modal && (
          <div className="w-1/6 mt-10 bg-white rounded-md shadow-lg text-black p-3 text-center mx-auto transition [transition-duration: 500ms]">
            <h2 className="font-semibold ">Created new User {data.name}</h2>
          </div>
        )}
      </div>
      <div className="text-center absolute w-full">
        {errmodal && (
          <div className="w-1/6 mt-10 bg-white rounded-md shadow-lg text-black p-3 text-center mx-auto transition [transition-duration: 500ms]">
            <h2 className="font-semibold ">Cannot create a new user.</h2>
            <p>Unexpected error</p>
            <div className="flex justify-end items-center mt-3 w-full">
              <button
                className="bg-red-400  rounded shadow-lg mr-0 px-4 py-2 border border-teal-500 text-white hover:text-gray-800 hover:bg-transparent transition [transition-duration:400ms] font-semibold"
                onClick={() => {
                  setErrModal(false)
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-11/12 md:w-5/12 lg:w-3/12 xl:w-2/12 bg-white rounded-md shadow-lg mx-auto px-4 py-4 mt-28">
        <div className="block my-2">
          <label className="font-bold">Name:</label>
          <input
            type={"text"}
            className="rounded outline-slate-600 bg-gray-300 p-2 w-full"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="block my-2">
          <label className="font-bold">Username:</label>
          <input
            type={"text"}
            className="rounded outline-slate-600 bg-gray-300 p-2 w-full"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="block my-2">
          <label className="font-bold">Phone:</label>
          <input
            type={"tel"}
            className="rounded outline-slate-600 bg-gray-300 p-2 w-full"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className="flex justify-end items-center mt-3 w-full">
          <button
            className="bg-teal-400  rounded shadow-lg mr-0 px-4 py-2 border border-teal-500 text-white hover:text-gray-800 hover:bg-transparent transition [transition-duration:400ms] font-semibold"
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Creator;
