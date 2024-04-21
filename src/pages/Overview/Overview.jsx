import { useContext, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Repos from "../../components/Repos/Repos";
import Profile from "../../components/Profile/Profile";
import styles from "./overview.module.css";
import { GlobalContext } from "../../context/GlobalContext";

// import Nav from "../components/Nav";
// import { ReactComponent as Loader } from "../assets/loader.svg";

function Overview() {
  const [searchTerm, setSearchTerm] = useState("");
  const { user, repos, loading, currentPage, setCurrentPage, repoPerPage } =
    useContext(GlobalContext);

  // // NEW FEATURE: Searching for Other GitHub Users
  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   if (search === "") return;
  //   await handleSearchUser();
  //   await handleSearchRepo();
  // };

  // const handleSearchUser = async () => {
  //   const response = await fetch(`${url}/users/${search}`, {
  //     headers: {
  //       Authorization: `token ${token}`,
  //     },
  //   });
  //   const data = await response.json();
  //   setUser(data);
  //   setLoading(false);
  // };

  // const handleSearchRepo = async () => {
  //   const response = await fetch(`${url}/users/${search}/repos`, {
  //     headers: {
  //       Authorization: `token ${token}`,
  //     },
  //   });

  //   const data = await response.json();
  //   setRepos(data);
  //   setLoading(false);
  //   console.log(data);
  // };

  if (loading) return <div className="loader"></div>;

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

  return (
    <div className={`${styles["flex-row"]} ${styles["overview__container"]}`}>
      {/* <Nav handleSearch={handleSearch} search={search} setSearch={setSearch} /> */}

      {<Overview /> ? (
        <div className={styles["flex-container"]}>
          <div className={styles["overview__card1"]}>
            <Profile profile={user} />
          </div>
          <div className={styles["overview__card"]}>
            <div className={styles["search__container"]}>
              <input
                type="text"
                placeholder="Enter Repository/key word"
                id="searchInput"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <Repos currentRepo={currentRepo} searchTerm={searchTerm} />

            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <div class="loader"></div>
      )}
    </div>
  );
}
export default Overview;
