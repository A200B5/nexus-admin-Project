import { useState, useEffect } from "react";

function useCounter(target, duration = 1400, active = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return val;
}

function Sparkline({ data, color }) {
  const max = Math.max(...data);
  return (
    <div className="sparkline">
      {data.map((v, i) => (
        <div
          key={i}
          className="spark-bar"
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            opacity: 0.5 + 0.5 * (i / data.length),
          }}
        />
      ))}
    </div>
  );
}

export default function StatsCard({
  label, raw, prefix = "", suffix = "", icon,
  change, changeLabel, colorClass, iconClass,
  spark, sparkColor, loaded,
}) {
  const count = useCounter(raw, 1400, loaded);
  const display =
    prefix + (raw > 999 ? (count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count) : count) + suffix;

  if (!loaded)
    return <div className="loading-skeleton skel-stat" />;

  return (
    <div className={`stat-card ${colorClass}`}>
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        <div className={`stat-icon ${iconClass}`}>{icon}</div>
      </div>

      <div className="stat-value">{display}</div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className={`stat-change ${change > 0 ? "up" : "down"}`}>
          <span>{change > 0 ? "↑" : "↓"}</span>
          <span>{Math.abs(change)}%</span>
          <span className="stat-sub">{changeLabel}</span>
        </div>
        {spark && <Sparkline data={spark} color={sparkColor} />}
      </div>
    </div>
  );
}
