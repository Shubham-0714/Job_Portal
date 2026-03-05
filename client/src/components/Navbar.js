import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          JobPortal
        </Link>

        <div className="flex items-center gap-6">
          <Link className="hover:text-indigo-600" to="/">
            Jobs
          </Link>

          {!token && (
            <>
              <Link className="hover:text-indigo-600" to="/login">
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          )}

          {token && (
            <>
              <Link className="hover:text-indigo-600" to="/profile">
                Profile
              </Link>

              {user?.role === "admin" && (
                <Link
                  to="/create-job"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Create Job
                </Link>
              )}

              <button
                onClick={logoutHandler}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;