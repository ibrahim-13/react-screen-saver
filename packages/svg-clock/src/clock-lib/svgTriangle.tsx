import React from 'react';

type SvgTriangleProps = {
  d: string,
  style?: React.CSSProperties,
  className?: string,
}

export const SvgTriangle: React.FC<SvgTriangleProps> = (props: SvgTriangleProps) => {
  return (
    <path {...props}></path>
  );
}