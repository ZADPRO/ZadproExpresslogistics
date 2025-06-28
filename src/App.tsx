import { useEffect } from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
