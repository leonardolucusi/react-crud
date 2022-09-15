import "./App.css";
import Home from "./components/home";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
