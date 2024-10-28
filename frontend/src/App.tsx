import React from "react";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddVideo from "./pages/add";
import EditVideo from "./pages/editVideo";
import DeleteVideo from "./pages/delete";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-video" element={<AddVideo/>} />
        <Route path="/edit-video/:id" element={<EditVideo/>} />
        <Route path="/delete-video/:id" element={<DeleteVideo/>} />
      </Routes>
    </div>
  );
};
export default App;
