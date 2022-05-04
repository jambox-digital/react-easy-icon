import * as React from 'react'

export type Props = {
  className?: string
}

const Package: React.FC<Props> = ({ className = 'default' }) => {
  return <h1 className={className}>react icon component</h1>
}

export default Package