import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const parms = useParams();

  const { user, loggedIn, setLoggedIn } = useContext(UserContext);

  const login = () => {
    setLoggedIn(true);

    // email and password macthes

    navigate("/dashboard");

    // if wrong email or password
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 mt-2">
          Please login to your account
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <span className="text-blue-600 cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            onClick={login}
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
