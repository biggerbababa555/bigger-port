import React from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../img/programmer.json";
import lottiecss from '../Styles/lottie.css';

const App = () => 

<Lottie className="programmer" animationData={lottieAnimation} loop={true} />;

export default App;