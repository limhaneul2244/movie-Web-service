import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieApp1 from "./routes/MovieApp1";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path={"Detail/:id"} element={<Detail/>}></Route> */}
        <Route path={`${process.env.PUBLIC_URL}/Detail/:id`} element={<Detail/>}></Route>
        <Route path="/" element={<MovieApp1 />}></Route>
      </Routes>
    </Router>
  )
}

export default App;


