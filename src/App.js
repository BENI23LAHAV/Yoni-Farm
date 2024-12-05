import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Posts from "./Components/Posts";
import Info from "./Components/Info";
import Galery from "./Components/Galery";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <div className="website">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/info" element={<Info />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
