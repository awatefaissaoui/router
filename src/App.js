import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Listmovies from "./Listmovies";
import List from "./List";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Filter from "./Filter";
import Film from "./Film";
import Create from "./Create";
import axios from "axios";

function App() {
  useEffect(() => {
axios.get("http://localhost:8081/bonjour",).then((res)=>console.log(res))
  },[]);

  return (
    <div
      style={{
        backgroundColor: "#FDFFAB",
      }}
    >
      <Navbar />
      <Filter />

      <List />
      <Router>
        <div>
          <h1>Movies App</h1>
          <Link to="/films">list Films</Link> <br></br>
          <Link to="/">Home</Link>
          <Routes>
            <Route path="/film/:id" element={<Film />} />
            <Route path="/films" element={<Listmovies />} />
            <Route path="/" element={<Listmovies />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
