export default function Navbar({ dark, setDark, collapsed, setCollapsed }) {
  return (
    <header className="navbar">
      <button className="toggle-btn" onClick={() => setCollapsed((c) => !c)}>
        ☰
      </button>

      <div className="search-bar">
        <span style={{ color: "var(--text3)", fontSize: 14 }}>🔍</span>
        <input placeholder="Search anything..." />
      </div>

      <div className="navbar-right">
        <div className="icon-btn">
          🔔<div className="notif-dot" />
        </div>
        <div className="icon-btn">📊</div>

        <div className="dark-toggle" onClick={() => setDark((d) => !d)}>
          <div className={`dark-toggle-opt${dark ? " on" : ""}`}>🌙 Dark</div>
          <div className={`dark-toggle-opt${!dark ? " on" : ""}`}>☀️ Light</div>
        </div>
      </div>
    </header>
  );
}
