import './App.css';
// import Home from './components/Home'
import ImageSlider from './components/Slider/ImageSlider';
import { SliderData } from './components/Slider/SliderData';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
