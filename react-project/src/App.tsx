import { Routes, Route } from "react-router-dom";
import InputComponent from "./components/InputComponent";
import NavBar from "./components/Navbar";
import AllTask from "./components/AllTask";
import CompletedTask from "./components/CompletedTask";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "30px" }}></div>
      <Routes>
        <Route path="/" element={<InputComponent />} />
        <Route path="/all-tasks" element={<AllTask />} />
        <Route path="completed-tasks" element={<CompletedTask />} />
      </Routes>
    </>
  );
}

export default App;
