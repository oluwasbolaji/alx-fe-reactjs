import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (query, location, minRepos) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query}+location:${location}+repos:>=${minRepos}`
    );
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
