import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/navbar/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Active from "./pages/Activate/Active";
import Rooms from "./pages/Rooms/Rooms";

const isAuth = false;
const user = {
  activated: false,
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to={{ pathname: "/rooms" }} /> : <Home />}
        />
        <Route
          path="/auth"
          element={
            isAuth ? <Navigate to={{ pathname: "/rooms" }} /> : <Authenticate />
          }
        />
        <Route
          path="/activate"
          element={
            !isAuth ? (
              <Navigate to={{ pathname: "/" }} />
            ) : isAuth && !user.activated ? (
              <Active />
            ) : (
              <Navigate to={{ pathname: "/rooms" }} />
            )
          }
        />
        <Route
          path="/rooms"
          element={
            !isAuth ? (
              <Navigate to={{ pathname: "/" }} />
            ) : isAuth && !user.activated ? (
              <Navigate to={{ pathname: "/activate" }} />
            ) : (
              <Rooms />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
