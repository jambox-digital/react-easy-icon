import * as React from 'react'

export type ReactIconProps = {
  d: string,
  width?: number | string,
  height?: number | string,
  color?: string,
  viewBox?: string,
  ariaHidden?: boolean,
  role?: string,
  className?: string,
}

const Icon: React.FC<ReactIconProps> = ({d, width='24', height='auto', color='black', viewBox='0 0 24 24', ariaHidden=true, role='presentational', className}) => (
    <svg
        viewBox={viewBox}
        aria-hidden={`${ariaHidden}`}
        role={role}
        width={width}
        height={height}
        className={className}
    >
        <path d={d} fill={color} />
    </svg>
)

export default Icon