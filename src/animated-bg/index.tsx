import React from 'react';
import './bg.css';
import WaveTop from './wave-top.png';
import WaveMid from './wave-mid.png';
import WaveBot from './wave-bot.png';

const AnimatedBackground: React.FC = () => {
  console.log()
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div className="wave waveTop" style={{ backgroundImage: `url('${WaveTop}')` }}></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div className="wave waveMiddle" style={{ backgroundImage: `url('${WaveMid}')` }}></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div className="wave waveBottom" style={{ backgroundImage: `url('${WaveBot}')` }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;