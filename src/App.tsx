import React from 'react';
import SvgClockComponent from './svg-clock';
import AnimatedBackground from './animated-bg';

const App: React.FC = () => {
  return (
    <>
      <SvgClockComponent svgStyle={{ height: "80vh", width: "80vh" }} theme="sol" />
      <AnimatedBackground />
    </>
  );
};

export default App;