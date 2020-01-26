import React from 'react'
import styled from 'styled-components'
import { FontSizes, Colors } from '../../../lib/style-guide'

const FileInput: FC<{
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  label: string
}> = ({ className, onChange, label }) => {
  return (
    <>
      <input
        className={className}
        type="file"
        id="uploadLogo"
        accept="image/jpeg, image/png"
        onChange={onChange}
      ></input>
      <label className="action-button" htmlFor="uploadLogo">
        {label}
      </label>
    </>
  )
}

const StyledFileInput = styled(FileInput)`
  display: none;
  + .action-button {
    ${FontSizes.medium};
    color: ${Colors.AccordBlueSecondary};
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    line-height: 1;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export { StyledFileInput as FileInput }
