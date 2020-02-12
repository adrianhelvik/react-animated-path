import { useAutoMemo } from 'hooks.macro'
import { interpolate } from 'flubber'
import React from 'react'
// import * as d3 from 'd3'
// import log from './log'

export default function AnimatedPath({ from, to, fill, step }) {
  const [path, setPath] = React.useState(null)

  const interpolator = useAutoMemo(() =>
    interpolate(from, to, {
      maxSegmentLength: 0.1,
    }),
  )
  const d = useAutoMemo(() => interpolator(step))

  return <path ref={setPath} fill={fill} d={d} />
}
