import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg mb-6">
      <h2 className="text-2xl font-bold">Nyipoji's Movie Gallery</h2>

      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
        <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
