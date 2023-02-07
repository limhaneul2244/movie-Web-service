import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieApp1 from "./routes/MovieApp1";
import Detail from "./routes/Detail";

const App = () => {
  console.log(process.env);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path={"Detail/:id"} element={<Detail/>}></Route> */}
        <Route path="/Detail/:id" element={<Detail/>}></Route>
        <Route path="/" element={<MovieApp1 />}></Route>
      </Routes>
    </Router>
  )
}

export default App;


