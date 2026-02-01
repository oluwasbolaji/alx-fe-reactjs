import axios from "axios";

export const fetchUserData = async (query, location, minRepos) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}+location:${location}+repos:>=${minRepos}`
    );

    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
