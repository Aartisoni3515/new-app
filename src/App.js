import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
    <TextForm heading="Enter the text"/>
    </div>
    {/* <About></About> */}
   


    </>
  );
}

export default App;
