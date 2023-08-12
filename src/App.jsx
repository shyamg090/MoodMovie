import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Tvshows from "./components/tvshowsC/Tvshows";
import Movies from "./components/moviesC/Movies";
import Trending from "./components/trendingC/Trending";
import Moodbing from "./components/moodbingC/Moodbing";
import Error from "./components/errorpage/Error";
import Footer from "./components/Header/Footer";
import Details from "./components/detailsPage/Details";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/moodbing" element={<Moodbing />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
