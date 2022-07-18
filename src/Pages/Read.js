import { useSelector, useDispatch } from "react-redux";
import CardLayout from "../components/CardLayout";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { initialise } from "../features/Users";

function Read() {
  const datas = useSelector((state) => state.user.value.data);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false)
  useEffect(() => {
    axios
      .get("https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/users")
      .then((res) => {
        dispatch(initialise(res.data));
        console.log("useeffect runs");
        setLoad(true)
      });
  }, [dispatch]);

  return (
    <>
      <Navigation active="home" />
      {load && <CardLayout data={datas} />}
    </>
  );
}

export default Read;
