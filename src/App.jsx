import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detailproduct" element={<DetailProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
