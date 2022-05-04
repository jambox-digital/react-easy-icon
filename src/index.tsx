import * as React from 'react'

export type ReactIconProps = {
  d: string,
  width: number,
  height: number,
  color: string,
  viewBox: string,
}

const Icon: React.FC<ReactIconProps> = ({d, width=24, height=24, color="black", viewBox='0 0 24 24'}) => (
    <svg
        viewBox={viewBox}
        aria-hidden='true'
        role='presentation'
        width={width}
        height={height}
    >
        <path d={d} fill={color} />
    </svg>
)

export default Icon