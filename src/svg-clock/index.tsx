import React from 'react';
import * as utils from './utls';
import './clock.css';
import { ClockTime } from './types';
import { SvgCircle } from './svgCircle';
import { SvgTriangle } from './svgTriangle';
import { SvgHand } from './svgHand';

type AppState = {
  time: ClockTime,
  transformMin: string,
  transformSec: string,
  dTri: string,
}

const HandsDisplayStyle: React.CSSProperties = {
  fontSize: "40",
  textAnchor: "middle",
  fontWeight: "bold",
}

const AppInitialState: AppState = {
  time: {
    year: "....",
    month: "...",
    week: "...",
    day: "..",
    hour: "..",
    min: "..",
    sec: "..",
  },
  transformMin: "267.7369,144.6167",
  transformSec: "259.0761,64.0246",
  dTri: "M259.076115911649,64.02464348021618L267.7369315913329,144.6166779233966L256,256Z"
}

type SvgClockComponentProps = {
  svgStyle?: React.CSSProperties,
  wraperDivStyle?: React.CSSProperties,
  theme?: 'frog' | 'sol' | 'wasp';
}

const SvgClockComponent: React.FC<SvgClockComponentProps> = (props: SvgClockComponentProps) => {
  const handCircle: JSX.Element = (
    <SvgCircle cx="0" cy="0" r="32" className="f1" />
  );

  const perFrameRefresh: boolean = false;

  const [state, setState] = React.useState<AppState>(AppInitialState);
  let FrameLastSecond: number = 0;

  function draw(): void {
    const now: Date = new Date();
    const s: number = now.getSeconds();

    if (!perFrameRefresh && s === FrameLastSecond) {
      window.requestAnimationFrame(draw);
      return;
    }

    const h: number = now.getHours();
    const m: number = now.getMinutes();
    const day: number = now.getDate();
    const week: number = now.getDay();
    const month: number = now.getMonth();
    const year: number = now.getFullYear();

    const ms: number = now.getMilliseconds();
    const prog = { ms: ms / 1000, s: 0, m: 0, h: 0 };
    prog.s = (s + prog.ms) / 60;
    prog.m = (m + prog.s) / 60;
    prog.h = (h + prog.m) / 12;

    const handS: string = utils.stringPos(utils.pos(256, 256, 192, prog.s * -360));
    const handM: string = utils.stringPos(utils.pos(256, 256, 112, prog.m * -360));
    const tri: string = utils.stringPos(utils.pos(256, 256, 0, prog.h * -360));

    FrameLastSecond = s;
    setState({
      time: {
        year: year.toString(),
        month: utils.getMonth(month),
        week: utils.getWeek(week),
        day: day.toString(),
        hour: utils.strPad(h),
        min: utils.strPad(m),
        sec: utils.strPad(s),
      },
      transformMin: handM,
      transformSec: handS,
      dTri: `M${handS}L${handM}L${tri}Z`,
    });

    window.requestAnimationFrame(draw);
  };

  React.useEffect(() => {
    draw();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={props.wraperDivStyle} className={`clock-container svg-clock-${props.theme || 'sol'}`}>
      <svg style={props.svgStyle} id="clock" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <style>
          {`text {font - family: 'Helvetica Bold', 'Helvetica', sans-serif; font-weight: bold; }`}
        </style>
        <SvgCircle cx="256" cy="256" r="256" className="f1" />
        <SvgCircle cx="256" cy="256" r="192" className="s2" fill="none" style={{ strokeWidth: 4 }} />
        <SvgCircle cx="256" cy="256" r="112" className="s2" fill="none" style={{ strokeWidth: 4 }} />
        <SvgTriangle d={state.dTri} className="f2 s2" style={{ strokeWidth: "80", strokeLinejoin: "round" }} />
        <SvgHand cirleElement={handCircle} x="0" y="14" transform="matrix(1,0,0,1,256,256)" style={HandsDisplayStyle} className="f2 displayH" text={state.time.hour} />
        <SvgHand cirleElement={handCircle} x="0" y="14" transform={`matrix(1,0,0,1,${state.transformMin})`} style={HandsDisplayStyle} className="f2 displayM" text={state.time.min} />
        <SvgHand cirleElement={handCircle} x="0" y="14" transform={`matrix(1,0,0,1,${state.transformSec})`} style={HandsDisplayStyle} className="f2 displayS" text={state.time.sec} />
      </svg>
      <span className="text-container">
        {state.time.week}, {state.time.day}
        <hr className="custom-style" />
        {state.time.month} {state.time.year}
      </span>
    </div>
  );
};

export default SvgClockComponent;
