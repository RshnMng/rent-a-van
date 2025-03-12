import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "../server";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Review from "./pages/Review";
import HostLayout from "./pages/HostLayout";
import HostVans from "./pages/HostVans";
import MyVan from "./pages/MyVan";
import MyVanDetail from "./pages/MyVanDetail";
import MyVanPricing from "./pages/MyVanPricing";
import MyVanPhotos from "./pages/MyVanPhotos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthReq from "./pages/AuthReq";
import Soldout from "./pages/Soldout";
import CreateAccount from "./pages/CreateAccount";

function App() {
  const saveToLocal = (name, value) => {
    const dataJson = JSON.stringify(value);
    localStorage.setItem(name, dataJson);
  };

  const getFromLocal = (name) => {
    const dataJson = localStorage.getItem(name);
    const data = JSON.parse(dataJson);
    return data;
  };

  function initiateLogStatus() {
    const loggedIn = getFromLocal("loggedin");
    loggedIn === null ? saveToLocal("loggedin", false) : isAuth(loggedIn);
  }

  function initiateUserAccounts() {
    const userAccounts = getFromLocal("accounts");

    userAccounts === null ? saveToLocal("accounts", authUsers) : setAuthUsers(userAccounts);
  }

  function initiateCurrentUser() {
    let currentUser = getFromLocal("currentUser");

    currentUser === null ? saveToLocal("currentUser", "") : setCurrentUser(currentUser);
  }

  const [vanInfo, setVans] = React.useState([]);
  const [loading, isloading] = React.useState(true);
  const [error, isError] = React.useState(null);
  const [errorInfo, setErrorInfo] = React.useState(null);
  const [auth, isAuth] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [myVans, setMyVans] = React.useState([
    { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" },

    {
      id: "2",
      name: "Dreamfinder",
      price: 65,
      description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
      hostId: "789",
    },
  ]);
  const [displayedVans, setDisplayedVans] = React.useState([]);

  const [authUsers, setAuthUsers] = React.useState([
    { firstName: "Rashaan", lastName: "Mungo", email: "heelturnnyc@gmail.com", password: "Dubbsin6" },
    { firstName: "Jane", lastName: "Park", email: "janeispretty@gmail.com", password: "ilovejane" },
  ]);

  React.useEffect(() => {
    initiateLogStatus();
    initiateUserAccounts();
    initiateCurrentUser();

    fetch("/api/vans")
      .then((data) => {
        if (data.status >= 400) {
          throw {
            message: "Failed to Load Vans",
            statusText: data.statusText,
            status: data.status,
          };
        }
        return data.json();
      })
      .then((data) => {
        setDisplayedVans(data.vans);
        setVans(data.vans);
      })
      .catch((error) => {
        isError(true);
        setErrorInfo(error);
      })
      .finally(() => {
        isloading(false);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout props={{ auth, isAuth, saveToLocal, getFromLocal, currentUser, setCurrentUser }} />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login props={{ auth, isAuth, saveToLocal, getFromLocal, authUsers, setAuthUsers, setCurrentUser, currentUser }} />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans props={[vanInfo, setVans, displayedVans, setDisplayedVans, loading, error, errorInfo]} />} />
            <Route path="vans/:id" element={<VanDetail props={vanInfo} />} />
            <Route path="soldout" element={<Soldout />} />
            <Route path="sign-up" element={<CreateAccount props={{ authUsers, setAuthUsers, saveToLocal, getFromLocal }} />} />
            <Route element={<AuthReq props={{ auth, isAuth, saveToLocal, getFromLocal }} />}>
              <Route path="host" element={<HostLayout props={myVans} />}>
                <Route index element={<Dashboard props={currentUser} />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Review />} />
                <Route path="my-vans" element={<HostVans />} />
                <Route path="my-vans/:id" element={<MyVan />}>
                  <Route index element={<MyVanDetail />} />
                  <Route path="pricing" element={<MyVanPricing />} />
                  <Route path="photos" element={<MyVanPhotos />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
