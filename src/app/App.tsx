import React from "react";
import Header from "../widgets/Header/Header";
import Cards from "../pages/Cards/Cards";
import Filter from "../widgets/Filter/Filter";

function App() {
  return (
    <>
      <div style={{ padding: "0 100px 50px 100px" }}>
        <Header />
        <Filter />
        <Cards />
      </div>
    </>
  );
}

export default App;
