import React from "react";
import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NewsContainer />
      <Footer />
    </div>
  );
}

export default App;
