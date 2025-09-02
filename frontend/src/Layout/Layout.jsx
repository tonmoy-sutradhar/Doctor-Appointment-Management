import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Router from "../router/Router";

function Layout() {
  return (
    <>
      <div className=" px-32">
        <Header></Header>
        <main className="max-w-max h-[670px]">
          <Router></Router>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
