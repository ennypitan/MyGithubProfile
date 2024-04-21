import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Overview from "./pages/Overview/Overview";
import RepositoryDetails from "./pages/RepositoryDetails/RepositoryDetails";
import { GlobalProvider } from "./context/GlobalContext";
import Error from "./pages/Error/Error";
// import NavBar from "./Components/Navbar/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },

      { path: "/repo/:Id", element: <RepositoryDetails /> },
      // { path: "login", element: <LoginSignup /> },
    ],
  },
]);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
