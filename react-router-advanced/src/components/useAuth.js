import { useState } from "react";

export const useAuth = () => {
  // simulate logged-in user
  const [isAuthenticated] = useState(true);

  return { isAuthenticated };
};
