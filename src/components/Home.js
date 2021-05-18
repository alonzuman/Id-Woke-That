import { Box, Typography, useTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router'
import useEditor from '../hooks/useEditor'
import ImagePicker from './ImagePicker'
import Logo from './Logo'

const TEXT = 'Wanna look as woke as all your friends on social media? It’s easy! Just upload a photo and we’ll give you that perfect caption, making you look as PC as can be ✌️'

export default function Home() {
  const { spacing } = useTheme()
  const { state, updateCaption } = useEditor()
  const { push } = useHistory()

  useEffect(() => {
    if (state?.imageURL) {
      updateCaption()
      push('/p/new')
    }
  }, [state?.imageURL])

  return (
    <Box
      alignItems='center'
      display='flex'
      justifyContent='center'
      flexDirection='column'
      flex={1}
    >
      <Logo fontSize={48} mb={1} />
      <Typography style={{ marginBottom: spacing(2), maxWidth: spacing(60), textAlign: 'center' }}>{TEXT}</Typography>
      <ImagePicker />
    </Box>
  )
}
