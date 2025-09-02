import React from "react";
import Header from "../components/Header/Header";
import Routes from "../routes/Routes";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes></Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
