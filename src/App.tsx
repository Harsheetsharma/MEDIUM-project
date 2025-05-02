import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { Appbar } from "./components/AppBar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent></AppContent>
      </BrowserRouter>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const hideappbarpath = ["/signin", "/signup"];
  const shouldHideAppbar = hideappbarpath.includes(location.pathname);

  return (
    <>
      {!shouldHideAppbar && <Appbar></Appbar>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </>
  );
}
export default App;
