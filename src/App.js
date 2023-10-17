import "./App.css";
import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <Shop />
      </div>
    </>
  );
}

export default App;
