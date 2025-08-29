import { Route, Routes } from "react-router";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import ScrollToTop from "./components/ui/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route
          path="*"
          element={
            <div className="min-h-screen max-w-6xl flex justify-center items-center ">
              <h1 className="">404 | Page Not Found</h1>
            </div>
          }
        ></Route>
      </Routes> */}
    </>
  );
}

export default App;
