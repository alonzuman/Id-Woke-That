import { Box } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import useEditor from '../hooks/useEditor'
import Logo from './Logo'

export default function Header() {
  const { updateState } = useEditor()
  const { push } = useHistory()

  const handleClick = () => {
    updateState({
      caption: '',
      imageURL: ''
    })
    push('/')
  }

  return (
    <Box style={{ cursor: 'pointer' }} textAlign='center' mt={2} onClick={handleClick}>
      <Logo fontSize={48} />
    </Box>
  )
}
