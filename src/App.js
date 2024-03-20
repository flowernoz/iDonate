import { Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Layout from "./routes/Layout";

function App() {
  const auth = localStorage.getItem("token");
  if (auth) {
    return <Layout />;
  } else {
    return (
      <>
        <Auth />
        <Navigate to={"/login"} />
      </>
    );
  }
}

export default App;
