import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs`)
      .then((res) => res.json())
      .then((data) => {
        const foundJob = data.jobs.find((j) => j._id === id);
        setJob(foundJob);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-10">Loading...</p>;

  if (!job)
    return <p className="p-10 text-red-500">Job not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {job.title}
      </h1>

      <p className="text-gray-500 mb-6">
        {job.company} • {job.location}
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        {job.description}
      </p>

      <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded">
        {job.role}
      </span>
    </div>
  );
}

export default JobDetails;