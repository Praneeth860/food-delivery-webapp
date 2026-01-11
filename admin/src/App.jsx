import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const url = "https://food-delivery-backend-3ysn.onrender.com";

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/Add" element={<Add url={url} />} />
          <Route path="/List" element={<List url={url} />} />
          <Route path="/Orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
