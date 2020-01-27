import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../lib/style-guide'
import logoPlaceholder from '../../../icons/logo-placeholder.svg'

const SQ_SIZE = 80
const STROKE_WIDTH = 1
const RADIUS = (SQ_SIZE - 1) / 2
const VIEW_BOX = `0 0 ${SQ_SIZE} ${SQ_SIZE}`
const DASH_ARRAY = RADIUS * Math.PI * 2

const CircularProgress: FC<{ progress: number }> = ({
  className,
  progress = 0
}) => {
  const dashOffset = DASH_ARRAY - (DASH_ARRAY * progress) / 100

  return (
    <div className={className}>
      <svg width={SQ_SIZE} height={SQ_SIZE} viewBox={VIEW_BOX}>
        <circle
          className="circle-background"
          cx={SQ_SIZE / 2}
          cy={SQ_SIZE / 2}
          r={RADIUS}
          strokeWidth={`${STROKE_WIDTH}px`}
        />
        <circle
          className="circle-progress"
          cx={SQ_SIZE / 2}
          cy={SQ_SIZE / 2}
          r={RADIUS}
          strokeWidth={`${STROKE_WIDTH}px`}
          transform={`rotate(-90 ${SQ_SIZE / 2} ${SQ_SIZE / 2})`}
          style={{
            strokeDasharray: DASH_ARRAY,
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
