import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
