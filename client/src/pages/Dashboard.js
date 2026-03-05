import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Recruiter Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">My Role</h3>
            <p className="text-gray-600 capitalize">{user?.role}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Post a Job</h3>
            <p className="text-gray-600 mb-4">
              Create and manage job listings
            </p>
            <Link
              to="/create-job"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Create Job
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">View Jobs</h3>
            <p className="text-gray-600 mb-4">
              Browse all active job posts
            </p>
            <Link
              to="/"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-black"
            >
              View Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;