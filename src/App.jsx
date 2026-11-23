import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(true);
  const [page, setPage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    setLoaded(false);
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, [page]);

  const pages = {
    dashboard: <Dashboard loaded={loaded} />,
    users: <Users />,
    settings: <Settings />,
  };

  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="main">
        <Navbar dark={dark} setDark={setDark} collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="page-content">{pages[page]}</div>
      </div>
    </div>
  );
}
