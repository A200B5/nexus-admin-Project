const NAV_ITEMS = [
  { id: "dashboard", icon: "⬛", label: "Dashboard" },
  { id: "users",     icon: "👥", label: "Users", badge: 3 },
  { id: "settings",  icon: "⚙️", label: "Settings" },
];

export default function Sidebar({ page, setPage, collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">N</div>
        <span className="logo-text">Nexus Admin</span>
      </div>

      <nav className="nav-section">
        <div className="nav-label">Main</div>
        {NAV_ITEMS.map((n) => (
          <div
            key={n.id}
            className={`nav-item${page === n.id ? " active" : ""}`}
            onClick={() => setPage(n.id)}
          >
            <span className="nav-icon">{n.icon}</span>
            <span className="nav-text">{n.label}</span>
            {n.badge && <span className="nav-badge">{n.badge}</span>}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-pill">
          <div className="avatar">AK</div>
          <div className="user-info">
            <div className="user-name">Ahmed Bakr</div>
            <div className="user-role">Super Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
