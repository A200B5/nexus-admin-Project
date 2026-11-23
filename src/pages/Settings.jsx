import { useState } from "react";

const SECTIONS = [
  {
    title: "🔔 Notifications",
    items: [
      { k: "email",     label: "Email Alerts",      desc: "Receive order and system emails" },
      { k: "push",      label: "Push Notifications", desc: "Browser push alerts"             },
      { k: "analytics", label: "Weekly Reports",     desc: "Weekly digest to your inbox"     },
    ],
  },
  {
    title: "🔐 Security",
    items: [
      { k: "mfa",  label: "Two-Factor Auth",   desc: "TOTP or hardware key required" },
      { k: "api",  label: "API Access Logs",   desc: "Log all API requests"           },
      { k: "beta", label: "Beta Features",     desc: "Opt-in to experimental UI"      },
    ],
  },
];

function Toggle({ on, onToggle }) {
  return (
    <div className={`switch${on ? " on" : ""}`} onClick={onToggle} />
  );
}

export default function Settings() {
  const [switches, setSwitches] = useState({
    email: true, push: false, analytics: true,
    mfa: true, api: false, beta: false,
  });
  const toggle = (k) => setSwitches((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div>
      <div className="page-title">Settings</div>
      <div className="page-sub">Configure your workspace preferences</div>

      <div className="settings-grid">
        {SECTIONS.map((sec) => (
          <div key={sec.title} className="settings-section">
            <div className="settings-title">{sec.title}</div>
            {sec.items.map((item) => (
              <div key={item.k} className="setting-row">
                <div>
                  <div className="setting-label">{item.label}</div>
                  <div className="setting-desc">{item.desc}</div>
                </div>
                <Toggle on={switches[item.k]} onToggle={() => toggle(item.k)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
