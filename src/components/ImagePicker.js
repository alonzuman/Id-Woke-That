import React, { useRef } from 'react'
import SecondaryButton from './SecondaryButton'
import ImageIcon from '@material-ui/icons/Image';
import useEditor from '../hooks/useEditor';
import { useTheme } from '@material-ui/core';

export default function ImagePicker() {
  const { updateState, state } = useEditor()
  const inputRef = useRef(null)
  const { spacing } = useTheme()

  const handleChange = e => {
    const file = e.target.files[0];
    const newImageURL = URL.createObjectURL(file)

    // wokeThat()
    updateState({
      imageURL: newImageURL
    })
  }

  return (
    <>
      <input type='file' style={{ display: 'none' }} onChange={handleChange} ref={inputRef} />
      <SecondaryButton
        fullWidth
        style={{ maxWidth: spacing(40) }}
        startIcon={<ImageIcon size={24} />}
        onClick={() => inputRef?.current?.click()}
      >
        {state.imageURL ? 'Choose a different photo' : 'Upload a photo'}
      </SecondaryButton>
    </>
  )
}
