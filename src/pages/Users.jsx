import UsersTable from "../components/UsersTable";

const MOCK_USERS = [
  { id: 1,  name: "Ahmed Ali",     email: "aria@nexus.io",   role: "Admin",  status: "active",   joined: "2024-01-12", orders: 142, spend: "$12,400" },
  { id: 2,  name: "Sara Mohamed",  email: "leo@nexus.io",    role: "User",   status: "active",   joined: "2024-02-08", orders: 67,  spend: "$4,890"  },
  { id: 3,  name: "Sara Ahmed",    email: "priya@nexus.io",  role: "Editor", status: "pending",  joined: "2024-03-20", orders: 28,  spend: "$1,760"  },
  { id: 4,  name: "Omar Khaled",   email: "marcus@nexus.io", role: "User",   status: "inactive", joined: "2023-11-05", orders: 5,   spend: "$340"    },
  { id: 5,  name: "Ahmed Mansour", email: "zoe@nexus.io",    role: "Admin",  status: "active",   joined: "2024-04-01", orders: 203, spend: "$18,900" },
  { id: 6,  name: "Mohamed Hassan",email: "finn@nexus.io",   role: "User",   status: "active",   joined: "2024-01-28", orders: 89,  spend: "$6,230"  },
  { id: 7,  name: "Nadia Sorel",   email: "nadia@nexus.io",  role: "Editor", status: "inactive", joined: "2023-09-14", orders: 12,  spend: "$780"    },
  { id: 8,  name: "Eli Torres",    email: "eli@nexus.io",    role: "User",   status: "pending",  joined: "2024-05-03", orders: 0,   spend: "$0"      },
  { id: 9,  name: "Hana Kim",      email: "hana@nexus.io",   role: "User",   status: "active",   joined: "2024-03-11", orders: 55,  spend: "$3,450"  },
  { id: 10, name: "Omar Farooq",   email: "omar@nexus.io",   role: "Editor", status: "active",   joined: "2024-02-25", orders: 91,  spend: "$7,100"  },
];

export default function Users() {
  return (
    <div>
      <div className="page-title">Users</div>
      <div className="page-sub">Manage and monitor all registered users</div>
      <div className="card">
        <UsersTable users={MOCK_USERS} />
      </div>
    </div>
  );
}
