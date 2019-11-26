import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", { key: 0 }, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       key: 1,
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese"
  //     }),
  //     React.createElement(Pet, {
  //       key: 2,
  //       name: "Teddy",
  //       animal: "Dog",
  //       breed: "Golden"
  //     }),
  //     React.createElement(Pet, {
  //       key: 3,
  //       name: "Doink",
  //       animal: "Cat",
  //       breed: "Gato"
  //     })
  //   ]);
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
