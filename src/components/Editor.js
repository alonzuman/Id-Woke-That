import { Box, useTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';
import useIncrementPosts from '../hooks/useIncrementPosts'
import Post from './Post';
import PrimaryButton from './PrimaryButton';
import ImagePicker from './ImagePicker';
import useEditor from '../hooks/useEditor';
import Header from './Header';
import { useHistory } from 'react-router';
import SecondaryButton from './SecondaryButton';

export default function Editor() {
  const { state, updateCaption } = useEditor()
  const { spacing } = useTheme()
  const { increment: incrementPosts } = useIncrementPosts()
  const { push } = useHistory()

  useEffect(() => {
    if (!state.imageURL) {
      push('/')
    }
  }, [state.imageURL])

  useEffect(() => {
    if (state.caption) {
      incrementPosts()
    }
  }, [state.caption, state.imageURL, incrementPosts])



  return (
    <>
      <Header />
      <Box flex={1} width='100%' padding={2} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
        <Post src={state.imageURL} caption={state.caption} />
        <Box maxWidth={spacing(50)} pb={2} pt={2} width='100%'>
          <PrimaryButton
            fullWidth
            onClick={updateCaption}
            style={{ marginBottom: spacing(1) }}
            startIcon={<RefreshIcon size={24} />}
          >
            Woke That
            </PrimaryButton>
          <ImagePicker />
        </Box>
      </Box>
    </>
  )
}
