import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData(query);
      setUsers([data]);
    } catch (err) {
      setError("Looks like we cant find the user");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </form>

      {/* Conditional Rendering using && */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-3 rounded flex items-center gap-3"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
