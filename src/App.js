import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Pages/NavigationBar/Navbar";
import ImageSlider from "./Pages/SliderPage/ImageSlider";
import SliderData from "./Pages/SliderPage/SliderData";

const App = () => {
  return (
    <>
      <NavBar />
      <ImageSlider slides={SliderData} />
    </>
  );
};

export default App;
