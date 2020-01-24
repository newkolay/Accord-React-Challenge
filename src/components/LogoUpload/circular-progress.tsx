import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../lib/style-guide'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'

const sqSize = 80
const strokeWidth = 1
const radius = (sqSize - 1) / 2
const viewBox = `0 0 ${sqSize} ${sqSize}`
const dashArray = radius * Math.PI * 2

const CircularProgress: FC<{ progress: number }> = ({
  className,
  progress = 0
}) => {
  const dashOffset = dashArray - (dashArray * progress) / 100

  return (
    <div className={className}>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
        <image
          x="50%"
          y="50%"
          width="30"
          height="46"
          transform="translate(-15,-23)"
          xlinkHref={logoPlaceholder}
        />
      </svg>
    </div>
  )
}

const StyledCircularProgress = styled(CircularProgress)`
  .circle-background,
  .circle-progress {
    fill: none;
  }

  .circle-background {
    stroke: ${Colors.Border};
  }

  .circle-progress {
    stroke: ${Colors.AccordBlueSecondary};
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`

export { StyledCircularProgress as CircularProgress }
