import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    role: "frontend",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("https://nexthire-cnwf.onrender.com/api/jobs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      setMessage("✅ Job created successfully");
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create New Job
        </h2>

        {message && (
          <p className="text-center mb-4 text-sm text-green-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="location"
            placeholder="Job Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />

          {/* ✅ ROLE DROPDOWN (IMPORTANT FIX) */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="full-stack">Full Stack</option>
          </select>

          <textarea
            name="description"
            placeholder="Job Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;