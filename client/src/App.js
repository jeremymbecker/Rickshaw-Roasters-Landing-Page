import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RickshawRoastersHomePage from './Components/RickshawRoastersHomePage';
import RickshawRoastersOurStoryPage from "./Components/pages/RickshawRoastersOurStoryPage";
import RickshawRoastersLocationsPage from "./Components/pages/RickshawRoastersLocationsPage";

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
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
        <Route path="/pages/locations" element={<RickshawRoastersLocationsPage></RickshawRoastersLocationsPage>} />
        <Route path="/pages/our-story" element={<RickshawRoastersOurStoryPage></RickshawRoastersOurStoryPage>} />
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
        <Route path="/" element={<RickshawRoastersHomePage></RickshawRoastersHomePage>} />
      </Routes>
    </Router>
  );
}

export default App;