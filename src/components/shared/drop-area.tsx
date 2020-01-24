import React, { useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Colors } from '../../lib/style-guide'

const DropArea: FC<{ onDrop(file: FileList): void }> = ({
  className,
  children,
  onDrop
}) => {
  const dropRef = React.useRef<HTMLDivElement>(null)
  // this is for tracking drag over nested elements
  const counter = useRef(0)

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dropRef.current?.classList.add('dragIn')
    // add 1 for nested element
    counter.current = counter.current + 1
  }

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    counter.current = counter.current - 1
    // return if nested element
    if (counter.current > 0) return
    dropRef.current?.classList.remove('dragIn')
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dropRef.current?.classList.remove('dragIn')
      counter.current = 0
      if (
        e.dataTransfer !== null &&
        e.dataTransfer.files &&
        e.dataTransfer.files.length > 0
      ) {
        onDrop(e.dataTransfer.files)
        e.dataTransfer.clearData()
      }
    },
    [onDrop]
  )

  useLayoutEffect(() => {
    const { current } = dropRef
    if (current !== null) {
      current.addEventListener('dragenter', handleDragEnter)
      current.addEventListener('dragleave', handleDragLeave)
      current.addEventListener('dragover', handleDragOver)
      current.addEventListener('drop', handleDrop)
    }
    return function cleanUp() {
      if (current !== null) {
        current.removeEventListener('dragenter', handleDragEnter)
        current.removeEventListener('dragleave', handleDragLeave)
        current.removeEventListener('dragover', handleDragOver)
        current.removeEventListener('drop', handleDrop)
      }
    }
  }, [handleDrop])

  return (
    <div className={className} ref={dropRef}>
      {children}
    </div>
  )
}

const StyledDropArea = styled(DropArea)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.dragIn {
    border: 1px dashed ${Colors.AccordBlueSecondary};
    background-color: ${Colors.BG3};
  }
`

export { StyledDropArea as DropArea }
