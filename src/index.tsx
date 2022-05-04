import * as React from 'react'

export type ReactIconProps = {
  d: string,
  width?: number | string,
  height?: number | string,
  color?: string,
  viewBox?: string,
  ariaHidden?: boolean,
  role?: string,
}

const Icon: React.FC<ReactIconProps> = ({d, width='auto', height='auto', color="black", viewBox='0 0 24 24', ariaHidden=true, role='presentational'}) => (
    <svg
        viewBox={viewBox}
        aria-hidden={`${ariaHidden}`}
        role={role}
        width={width}
        height={height}
    >
        <path d={d} fill={color} />
    </svg>
)

export default Icon