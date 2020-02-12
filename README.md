# react-animated-path
Animating SVG shapes in React just became easy! This library utilizes the
wonderful libraries flubber and color-interpolate and takes things one
step further. Simply specify the `fill` and `d` props for the different
animation stages and a `step` from one to zero and you will have crisp,
clean SVG animations.

## Installation
```
yarn add react-animated-path
```

or

```
npm install react-animated-path
```

## Minimal example

```javascript
import AnimatedPath from 'react-animated-path'
import * as shapes from './shapes'
import React from 'react'

const MyComponent = () => {
  const [step, setStep] = React.useState(0)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <Background />
      <Highlight />
      <AnimatedPath
        step={step}
        stages={[
          {
            fill: 'blue',
            d: shapes.ONE_NICE_SHAPE,
          },
          {
            fill: '#2d2d2d',
            d: shapes.ANOTHER_NICE_SHAPE,
          },
          {
            fill: 'green',
            d: shapes.A_THIRD_NICE_SHAPE,
          },
        ]}
      />
    </svg>
  )
}
```

## API

### props.step
A number from 0 to 1 (inclusive) that determines where in the animation
we currently are at.

If we have three steps to our animation, a `step` of `0.5` would mean
that we are exactly at the middle shape/fill.

### props.stages
An array of objects that specify the `fill` and `d` for the shape at the
given distinct step.

## Contribution
Pull requests are appreciated. The project uses Prettier for formatting
with the following config:

```json
{
  "trailingComma": "all",
  "semi": false,
  "singleQuote": true
}
```
