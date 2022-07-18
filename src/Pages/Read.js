import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";

function Read() {
  const res = useSelector((state) => state.user.value);

  return (
    <>
    <Navigation active="home" />
      <div>Read</div>
    </>
  );
}

export default Read;
