import Navigation from "../components/Navigation";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Edit() {
  // eslint-disable-next-line
  const [params, setParams] = useSearchParams();
  let id = params.get("id");
  const [modal, setModal] = useState(false);
  const [editor, setEditor] = useState([]);
  const navigate = useNavigate()
  const [edited, setEdited] = useState({
    name: editor.name,
    username: editor.username,
    phone: editor.phone,
    id: id,
  });

  const updateHandler = () => {
    axios
      .put(
        "https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/users/" + id,
        edited
      )
      .then((res) => {
        setModal(true);
        setTimeout(() => {
          navigate("/")
        }, 2000);
        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(
        `https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/users?id=${id}`
      )
      .then((res) => {
        setEditor(res.data[0]);
        setEdited((prev) => ({
          ...prev,
          name: res.data[0].name,
          phone: res.data[0].phone,
          username: res.data[0].username,
        }));
      });
  }, [id]);

  //  console.log(edited);
  return (
    <div className="w-full">
      <Navigation active="edit" />
      <div className="text-center absolute w-full">
      {modal && (
        <div className="w-1/6 mt-10 bg-white rounded-md shadow-lg text-black p-3 text-center mx-auto">
          <h2 className="font-semibold ">
            Data Updated Successfully for id: {id}
          </h2>
        </div>
      )}
      </div>
      <div className="w-11/12 md:w-4/12 xl:w-1/4 p-3 mx-auto rounded-md shadow-md bg-white my-20">
        <div className="my-2">
          <label className="mx-2">Name:</label>
          <br />
          <input
            type="text"
            defaultValue={editor.name}
            className="p-2 rounded text-base mx-2 bg-gray-300 outline-slate-400"
            onChange={(e) => {
              setEdited((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
        </div>

        <div className="my-2">
          <label className="mx-2">Username:</label>
          <br />
          <input
            type="text"
            defaultValue={editor.username}
            className="p-2 rounded text-base mx-2 bg-gray-300 outline-slate-400"
            onChange={(e) => {
              setEdited((prev) => ({
                ...prev,
                username: e.target.value,
              }));
            }}
          />
        </div>

        <div className="my-2">
          <label className="mx-2">Phone:</label>
          <br />
          <input
            type="tel"
            defaultValue={editor.phone}
            className="p-2 rounded text-base mx-2 bg-gray-300 outline-slate-400"
            onChange={(e) => {
              setEdited((prev) => ({
                ...prev,
                phone: e.target.value,
              }));
            }}
          />
        </div>
        <div className="my-2 text-right text-white">

          <button
            className="bg-teal-600 rounded mx-2 px-3 py-1.5 shadow-md"
            onClick={() => updateHandler()}
          >
            Update
          </button>
          <button
            className="bg-red-600 rounded mx-2 px-3 py-1.5 shadow-md"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Edit;
