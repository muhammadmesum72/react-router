import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <Link
          to="/users"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Go to Users
        </Link>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">1,245</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-sm text-gray-500">Active Sessions</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">342</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">$8,420</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
