import React, { useRef } from 'react'
import SecondaryButton from './SecondaryButton'
import ImageIcon from '@material-ui/icons/Image';
import useEditor from '../hooks/useEditor';
import { useTheme } from '@material-ui/core';

export default function ImagePicker({ style }) {
  const { updateState, state } = useEditor()
  const inputRef = useRef(null)
  const { spacing } = useTheme()

  const handleChange = e => {
    const file = e.target.files[0];
    const newImageURL = URL.createObjectURL(file)

    updateState({
      imageURL: newImageURL
    })
  }

  return (
    <>
      <input type='file' style={{ display: 'none' }} onChange={handleChange} ref={inputRef} />
      <SecondaryButton
        fullWidth={!state.imageURL}
        onClick={() => inputRef?.current?.click()}
        startIcon={<ImageIcon size={24} />}
        fullWidth
      >
        {state.imageURL ? 'Upload a different photo' : 'Upload a photo'}
      </SecondaryButton>
    </>
  )
}
