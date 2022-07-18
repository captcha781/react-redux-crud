import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Read from "./Pages/Read";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
