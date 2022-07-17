import { useSelector } from "react-redux";

function Read() {
  const res = useSelector((state) => state.user.value);

  return (
    <>
      <div>Read</div>
    </>
  );
}

export default Read;
