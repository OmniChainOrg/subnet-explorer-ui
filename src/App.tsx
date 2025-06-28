import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlockDetail from "./pages/BlockDetail";
import TxDetail from "./pages/TxDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="block/:height" element={<BlockDetail />} />
        <Route path="tx/:hash" element={<TxDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
