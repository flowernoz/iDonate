import { Routes, Route } from "react-router-dom";
import { RootRoutes } from "./routes";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import { MyBooleanContext } from "./context";
import { useContext } from "react";
function App() {
  const width = window.innerWidth <= 1100;
  const { isToggled, toggle } = useContext(MyBooleanContext);
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <main
          onClick={!isToggled && width && toggle}
        >
          <Header />
          <section>
            <Routes>
              {RootRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
