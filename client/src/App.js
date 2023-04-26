import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RickshawRoastersHomePage from './Components/RickshawRoastersHomePage';
import GreenCoffeeMainPage from "./Components/collections/GreenCoffeeMainPage";
import RoastedCoffeeMainPage from "./Components/collections/RoastedCoffeeMainPage";
import RickshawRoastersBrewingGuidePage from "./Components/pages/RickshawRoastersBrewingGuidePage";
import RickshawRoastersTrainingPage from "./Components/pages/RickshawRoastersTrainingPage";
import RickshawRoastersLocationsPage from "./Components/pages/RickshawRoastersLocationsPage";
import RickshawRoastersOurStoryPage from "./Components/pages/RickshawRoastersOurStoryPage";
import RickshawRoastersPartnershipPage from "./Components/pages/RickshawRoastersPartnershipPage";
import RickshawRoastersLoginPage from "./Components/account/RickshawRoastersLoginPage";
import RickshawRoastersRegisterPage from "./Components/account/RickshawRoastersRegisterPage";
import RickshawRoastersResetPasswordPage from "./Components/account/RickshawRoastersResetPasswordPage";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
        <Route path="/collections/green-coffee" element={<GreenCoffeeMainPage></GreenCoffeeMainPage>} />
        <Route path="/collections/roasted-coffee" element={<RoastedCoffeeMainPage></RoastedCoffeeMainPage>} />
        <Route path="/pages/brew-guide" element={<RickshawRoastersBrewingGuidePage></RickshawRoastersBrewingGuidePage>} />
        <Route path="/pages/training" element={<RickshawRoastersTrainingPage></RickshawRoastersTrainingPage>} />
        <Route path="/pages/locations" element={<RickshawRoastersLocationsPage></RickshawRoastersLocationsPage>} />
        <Route path="/pages/our-story" element={<RickshawRoastersOurStoryPage></RickshawRoastersOurStoryPage>} />
        <Route path="/pages/partnership" element={<RickshawRoastersPartnershipPage></RickshawRoastersPartnershipPage>} />
        <Route path="/account/login" element={<RickshawRoastersLoginPage></RickshawRoastersLoginPage>} />
        <Route path="/account/register" element={<RickshawRoastersRegisterPage></RickshawRoastersRegisterPage>} />
        <Route path="/account/reset-password" element={<RickshawRoastersResetPasswordPage></RickshawRoastersResetPasswordPage>} />
        <Route path="/cart" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
      </Routes>
    </Router>
  );
}

export default App;