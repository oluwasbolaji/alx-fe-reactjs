import React from "react";

const Search = ({ users }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Search Form */}
      <form className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Search GitHub username"
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white py-2 rounded">
          Search
        </button>
      </form>

      {/* Results Section (IMPORTANT PART) */}
      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
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
