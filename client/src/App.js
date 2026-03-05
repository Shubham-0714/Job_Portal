import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import CreateJob from "./pages/CreateJob";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://nexthire-cnwf.onrender.com/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto px-6 py-10">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Available Jobs
              </h1>

              {loading ? (
                <p>Loading jobs...</p>
              ) : jobs.length === 0 ? (
                <p>No jobs available</p>
              ) : (
                <JobList jobs={jobs} />
              )}
            </div>
          }
        />

        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-job"
          element={
            <ProtectedRoute>
              <CreateJob />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;