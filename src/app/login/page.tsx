const LoginPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-mono font-bold mb-6 text-center text-black">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-black font-mono mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-black"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black font-mono mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-mono hover:bg-blue-600 transition duration-300"
            >
              Click here
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
