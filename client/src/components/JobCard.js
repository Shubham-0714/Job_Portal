import { Link } from "react-router-dom";

function JobCard({ job }) {

  const applyJob = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await fetch(
        `https://nexthire-cnwf.onrender.com/api/applications/apply/${job._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Application submitted successfully");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Error applying for job");
    }
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-6">
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {job.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {job.company} • {job.location}
          </p>
        </div>

        <span className="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-600">
          {job.role}
        </span>
      </div>

      <p className="mt-4 text-gray-600 line-clamp-3">
        {job.description}
      </p>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-xs text-gray-400">
          Recently Posted
        </span>

        <div className="flex gap-3">

          <Link
            to={`/jobs/${job._id}`}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            View Job
          </Link>

          <button
            onClick={applyJob}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Apply
          </button>

        </div>
      </div>

    </div>
  );
}

export default JobCard;