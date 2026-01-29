import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6">
        <Link to="/dashboard">
      <h2 className="text-xl font-bold mb-8">Dashboard</h2>
        </Link>

      <nav className="flex flex-col space-y-4">
        <Link
          to="profile"
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition"
        >
          👤 Profile
        </Link>

        <Link
          to="users"
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition"
        >
          👥 Users
        </Link>

        <Link
          to="support"
          className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition"
        >
          🛠 Support
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
