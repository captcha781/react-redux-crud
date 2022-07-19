import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModalContext } from "./CardLayout";
import { useSelector, useDispatch } from "react-redux";
import { initialise } from "../features/Users";

function Card({ user }) {

  let datas = useSelector((state) => state.user.value.data);
  const dispatch = useDispatch()
  const context = useContext(ModalContext);
  const deleteHandler = (id) => {
    axios
      .delete(
        "https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/users/" + id
      )
      .then(() => {
        context.setModal(true);
        context.setUserDel(user.name);
        setTimeout(() => {
          context.setModal(false);
          context.setUserDel("");
          datas = datas.filter(elem => elem.id !== id)
          dispatch(initialise(datas))
        }, 2500);
      })
      .catch((err) => {
        context.setErrModal(true);
        context.setMessage(err.message);
        setTimeout(() => {
          context.setModal(false);
          context.setUserDel("");
        }, 2500);
      })
  };
  return (
    <div className="col-span-1 bg-white px-2 py-3 my-2 shadow-lg rounded">
      <h3 className="font-semibold mb-2">{user.name}</h3>
      <p className="my-2">@{user.username}</p>
      <p className="my-2">Phone: {user.phone}</p>
      <Link to={`edit?id=${user.id}`}>
        <button className="mx-1 px-3 py-1.5 bg-blue-500 rounded shadow-sm text-white">
          Edit
        </button>
      </Link>
      <button
        className="mx-1 px-3 py-1.5 bg-red-500 rounded shadow-sm text-white"
        onClick={() => deleteHandler(user.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
