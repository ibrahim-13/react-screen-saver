import React from 'react';

type SvgCircleProps = {
  cx: string,
  cy: string,
  r: string,
  fill?: string,
  className?: string,
  style?: React.CSSProperties,
}

export const SvgCircle: React.FC<SvgCircleProps> = (props: SvgCircleProps) => {
  return (
    <circle {...props}></circle>
  );
}