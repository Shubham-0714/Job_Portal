import { Link } from "react-router-dom";

function JobCard({ job }) {
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

        <Link
          to={`/jobs/${job._id}`}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          View Job
        </Link>
      </div>
    </div>
  );
}

export default JobCard;