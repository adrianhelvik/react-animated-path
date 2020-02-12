import interpolateColors from 'color-interpolate'
import { useAutoMemo } from 'hooks.macro'
import AnimatedPath from './AnimatedPath'
import React from 'react'

export default function MultiPath({ stages, step: passedStep }) {
  const createFill = interpolateColors(stages.map(stage => stage.fill))
  const step = passedStep * (stages.length - 1)

  const pathPairs = useAutoMemo(() => {
    const pathPairs = []
    for (let i = 1; i < stages.length; i++) {
      pathPairs.push({
        from: stages[i - 1].d,
        to: stages[i].d,
      })
    }
    return pathPairs
  })

  return pathPairs.map(({ to, from }, index) => {
    let fill = 'transparent'

    if (index <= step && index >= step - 1) {
      fill = createFill(passedStep)
    }

    return (
      <AnimatedPath
        key={index}
        fill={fill}
        from={from}
        to={to}
        step={step - index}
      />
    )
  })
}
