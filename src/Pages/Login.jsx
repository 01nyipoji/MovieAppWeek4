function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-white font-bold py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Don't have an account? <span className="text-yellow-400">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
