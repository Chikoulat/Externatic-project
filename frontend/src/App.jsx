import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ErrorBoundary from "./ErrorBoundary";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import getCandidate from "./services/API/candidate/getCandidate";
import getCompany from "./services/API/company/getCompany";
import getAdmin from "./services/API/admin/getAdmin";

function App() {
  const [auth, setAuth] = useState({});
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const [type, setType] = useState();

  if (Object.keys(auth).length === 0) {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const now = Date.now().valueOf() / 1000;
      if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
        localStorage.removeItem("token");
        toast.info("Votre session a expiré, veuillez vous reconnecter.");
      }
      const userData = {
        email: decoded.email,
        userTypeId: decoded.role,
      };
      setAuth({ ...userData, token });
    }
  }

  useEffect(() => {
    if (auth?.token) {
      if (auth.userTypeId === 1) {
        getCandidate(auth?.token, setType, setUser);
      } else if (auth.userTypeId === 2) {
        getCompany(auth?.token, setType, setUser);
      } else if (auth.userTypeId === 3) {
        getAdmin(auth?.token, setType, setUser);
      }
    }
  }, [auth?.token, auth?.userTypeId]);

  return (
    <div>
      <ErrorBoundary>
        <NavBar auth={auth} setAuth={setAuth} type={type} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
        <Outlet
          context={{ auth, setAuth, search, setSearch, user, type, setType }}
        />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
