import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(4);

  useEffect(() => {
    myProfile();
    myRepo();
  }, []);

  const url = "https://api.github.com";

  // Fetches Profile/User details
  const myProfile = async () => {
    try {
      const response = await fetch(`${url}/users/ennypitan`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Fetches Repositories
  const myRepo = async () => {
    try {
      const response = await fetch(`${url}/users/ennypitan/repos`);
      const data = await response.json();
      setRepos(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        repos,
        setRepos,
        loading,
        currentPage,
        setCurrentPage,
        repoPerPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
