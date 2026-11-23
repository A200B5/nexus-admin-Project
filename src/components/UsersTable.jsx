import { useState } from "react";

const PER_PAGE = 6;

export default function UsersTable({ users }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [pg, setPg] = useState(1);

  const filtered = users.filter((u) => {
    const q = search.toLowerCase();
    const matchQ =
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q);
    const matchF = filter === "all" || u.status === filter;
    return matchQ && matchF;
  });

  const pages = Math.ceil(filtered.length / PER_PAGE) || 1;
  const shown = filtered.slice((pg - 1) * PER_PAGE, pg * PER_PAGE);

  return (
    <div>
      <div className="search-filter">
        <input
          className="sf-input"
          placeholder="Search by name, email, role..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPg(1); }}
        />
        <select
          className="sf-select"
          value={filter}
          onChange={(e) => { setFilter(e.target.value); setPg(1); }}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {["User", "Role", "Status", "Orders", "Spend", "Joined"].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div className="empty-state">No users found matching your filters</div>
                </td>
              </tr>
            ) : (
              shown.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <div className="avatar" style={{ width: 28, height: 28, fontSize: 10, background: "var(--bg4)" }}>
                        {u.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, fontSize: 13 }}>{u.name}</div>
                        <div style={{ fontSize: 11, color: "var(--text3)" }}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text2)" }}>{u.role}</td>
                  <td><span className={`badge ${u.status}`}>{u.status}</span></td>
                  <td style={{ fontFamily: "var(--mono)" }}>{u.orders}</td>
                  <td style={{ fontFamily: "var(--mono)", color: "var(--green)" }}>{u.spend}</td>
                  <td style={{ color: "var(--text3)", fontFamily: "var(--mono)", fontSize: 12 }}>{u.joined}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>Showing {shown.length} of {filtered.length} users</span>
        <div className="page-btns">
          {Array.from({ length: pages }, (_, i) => (
            <div
              key={i}
              className={`page-btn${pg === i + 1 ? " active" : ""}`}
              onClick={() => setPg(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
