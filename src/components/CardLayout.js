import { useState, createContext } from "react";
import Card from "./Card";
export const ModalContext = createContext();
function CardLayout({ data }) {
  const [modal, setModal] = useState(false);
  const [userDel, setUserDel] = useState("");
  const [message, setMessage] = useState("");
  const [errmodal, setErrModal] = useState(false);
  

  return (
    <section className="cardLayout bg-gray-200">
      <div className="text-center absolute w-full">
        {modal && (
          <div className="w-1/6 mt-10 bg-white rounded-md shadow-lg text-black p-3 text-center mx-auto transition [transition-duration: 500ms]">
            <h2 className="font-semibold ">Deleted User {userDel}</h2>
          </div>
        )}
      </div>
      <div className="text-center absolute w-full">
        {errmodal && (
          <div className="w-1/6 mt-10 bg-white rounded-md shadow-lg text-black p-3 text-center mx-auto transition [transition-duration: 500ms]">
            <h2 className="font-semibold ">Cannot perform delete</h2>
            <p>{message}</p>
            <div className="flex justify-end items-center mt-3 w-full">
              <button
                className="bg-red-400  rounded shadow-lg mr-0 px-4 py-2 border border-teal-500 text-white hover:text-gray-800 hover:bg-transparent transition [transition-duration:400ms] font-semibold"
                onClick={() => {
                  setErrModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <ModalContext.Provider
        value={{modal, setModal, errmodal, setErrModal, userDel, setUserDel, message, setMessage}}
      >
        {data.map((element) => {
          return <Card user={element} key={element.id} />;
        })}
      </ModalContext.Provider>
    </section>
  );
}

export default CardLayout;
