import {
  AreaChart, Area, CartesianGrid, XAxis, YAxis,
  Tooltip, ResponsiveContainer,
} from "recharts";
import StatsCard from "../components/StatsCard";

const STATS = [
  { label: "Total Users",  raw: 24819,  prefix: "",  suffix: "", icon: "👥", change: 12.4, changeLabel: "vs last mo", colorClass: "c1", iconClass: "i1", spark: [45,52,48,61,55,67,71,78], sparkColor: "#00D4FF" },
  { label: "Revenue",      raw: 128400, prefix: "$", suffix: "", icon: "💰", change: 8.7,  changeLabel: "vs last mo", colorClass: "c2", iconClass: "i2", spark: [62,58,70,65,80,75,88,84], sparkColor: "#00E5A0" },
  { label: "Orders",       raw: 3841,   prefix: "",  suffix: "", icon: "📦", change: -2.3, changeLabel: "vs last mo", colorClass: "c3", iconClass: "i3", spark: [90,85,88,80,78,82,79,76], sparkColor: "#FFB340" },
  { label: "Conversion",   raw: 68,     prefix: "",  suffix: "%",icon: "📈", change: 5.1,  changeLabel: "vs last mo", colorClass: "c4", iconClass: "i4", spark: [30,35,32,40,38,45,44,50], sparkColor: "#A78BFA" },
];

const CHART_DATA = [
  { month: "Jan", revenue: 41200, orders: 312 },
  { month: "Feb", revenue: 52800, orders: 398 },
  { month: "Mar", revenue: 47100, orders: 341 },
  { month: "Apr", revenue: 63400, orders: 481 },
  { month: "May", revenue: 58700, orders: 445 },
  { month: "Jun", revenue: 71200, orders: 538 },
  { month: "Jul", revenue: 84300, orders: 631 },
  { month: "Aug", revenue: 79800, orders: 598 },
];

const ACTIVITY = [
  { icon: "🛒", bg: "#acc3", text: "New order #8821 placed by Zoe Chen",      time: "2 min ago" },
  { icon: "👤", bg: "#0dc3", text: "User Eli Torres registered",               time: "14 min ago" },
  { icon: "💳", bg: "#fb03", text: "Payment of $4,890 processed",              time: "1 hr ago" },
  { icon: "⚠️", bg: "#f553", text: "Server load spike on region EU-1",          time: "2 hr ago" },
  { icon: "✅", bg: "#0d3",  text: "Deployment v2.4.1 successful",             time: "3 hr ago" },
];

export default function Dashboard({ loaded }) {
  const isDark = document.documentElement.getAttribute("data-theme") !== "light";
  const gridColor = isDark ? "rgba(42,58,86,0.8)"   : "rgba(208,219,240,0.8)";
  const textColor = isDark ? "#5A7299"               : "#8FA3C0";
  const tipStyle  = {
    background:   isDark ? "#1A2236" : "#fff",
    border:       `1px solid ${isDark ? "#2A3A56" : "#D0DBF0"}`,
    borderRadius: 8, fontSize: 12,
    color:        isDark ? "#E8EDF5" : "#0F1C35",
  };

  return (
    <div>
      <div className="page-title">Dashboard</div>
      <div className="page-sub">Welcome back, Alex · Last updated just now</div>

      <div className="stats-grid">
        {STATS.map((s, i) => <StatsCard key={i} {...s} loaded={loaded} />)}
      </div>

      <div className="two-col">
        {/* Chart card */}
        <div className="card">
          <div className="card-title">Revenue & Orders</div>
          <div className="card-sub">Monthly performance overview</div>
          {loaded ? (
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={CHART_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="rv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#00D4FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="month" tick={{ fill: textColor, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: textColor, fontSize: 10 }} axisLine={false} tickLine={false}
                       tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={tipStyle} formatter={(v) => [`$${v.toLocaleString()}`, "Revenue"]} />
                <Area type="monotone" dataKey="revenue" stroke="#00D4FF" strokeWidth={2} fill="url(#rv)" />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="loading-skeleton skel-chart" />
          )}
        </div>

        {/* Activity feed */}
        <div className="card">
          <div className="card-title">Recent Activity</div>
          <div className="card-sub">Latest system events</div>
          <div className="activity-list">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="activity-item">
                <div className="act-icon" style={{ background: a.bg }}>{a.icon}</div>
                <div>
                  <div className="act-text">{a.text}</div>
                  <div className="act-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
