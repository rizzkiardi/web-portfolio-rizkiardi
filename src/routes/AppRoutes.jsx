import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Projects";
import NotFound from "@/components/pages/NotFound";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
