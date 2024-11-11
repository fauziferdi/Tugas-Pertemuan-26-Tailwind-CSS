import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5 max-w-5xl">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
