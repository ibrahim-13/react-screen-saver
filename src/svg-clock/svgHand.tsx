import React from 'react';

export type SvgHandProps = {
  x: string,
  y: string,
  transform: string,
  text: string,
  style?: React.CSSProperties,
  className?: string,
  cirleElement?: JSX.Element,
}

export const SvgHand: React.FC<SvgHandProps> = (props: SvgHandProps) => {
  return (
    <g transform={props.transform}>
      {props.cirleElement}
      <text x={props.x} y={props.y} style={props.style} className={props.className}>{props.text}</text>
    </g>
  );
}