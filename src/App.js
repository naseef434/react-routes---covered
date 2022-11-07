import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import StudentLists from "./StudentLists";
import Settings from "./pages/Settings";
import Usage from "./pages/Usage";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Header from "./components/Header";
import Details from "./pages/Details";
import PagenoutFound from "./pages/PagenoutFound";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/users" element={<Users />} />
      <Route path="/usage" element={<Usage />} />
      <Route path="/details/:userId" element={<Details />} />
      <Route path="*" element={<PagenoutFound />} />

    </Routes>
    </>
  );
}

export default App;
