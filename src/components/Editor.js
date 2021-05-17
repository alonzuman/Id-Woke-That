import { Box, Button, Typography, useTheme } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';
import ImageIcon from '@material-ui/icons/Image';
import captions from '../captions';
import Logo from './Logo';
import WaterMark from './WaterMark';
import useIncrementPosts from '../hooks/useIncrementPosts'

export default function ImageUploader() {
  const { spacing } = useTheme()
  const [state, setState] = useState({
    progress: 0,
    imageURL: '',
    caption: ''
  })
  const inputRef = useRef(null)
  const isUploading = state.progress !== 0 && state.progress !== 100
  const { increment: incrementPosts } = useIncrementPosts()

  const handleChange = e => {
    const file = e.target.files[0];
    const newImageURL = URL.createObjectURL(file)

    wokeThat()
    setState(s => {
      return {
        ...s,
        imageURL: newImageURL
      }
    })
  }

  useEffect(() => {
    if (state.caption) {
      incrementPosts()
    }

  }, [state.caption, state.imageURL])

  const wokeThat = () => {
    const cap = getWokeCaption()
    setState(s => {
      return {
        ...s,
        caption: cap
      }
    })
  }

  return (
    <>
      <Box textAlign='center' mt={2}>
        <Logo fontSize={32} mb={1} mt={2} />
        {!state.imageURL && <Typography style={{ marginTop: spacing(2) }}>Reprehenderit est proident qui velit ipsum. Nisi consequat ex nostrud minim Lorem et ea mollit velit laboris qui nisi. Ullamco veniam adipisicing consectetur Lorem cupidatat sint culpa. Occaecat qui in eu duis aute qui.</Typography>}
      </Box>
      <Box width='100%' padding={2} display='flex' flexDirection='column' alignItems='center' flex={4}>
        <Box height='100%' width='100%' maxWidth={512} position='relative'>
          {state.imageURL && (
            <img
              src={state.imageURL}
              style={{
                objectFit: 'contain',
                height: '100%',
                width: '100%',
              }}
            />
          )}
          {state.imageURL && (
            <Box
              position='absolute'
              top={0}
              right={0}
              left={0}
              bottom={0}
              bgcolor='#00000050'
            >
              <WaterMark />
              <Typography
                style={{
                  textTransform: 'uppercase',
                  textShadow: '0px 0px 10px #000000',
                  color: '#fff',
                  fontSize: 24,
                  fontFamily: `"Bebas Neue", cursive`,
                  textAlign: 'center',
                  fontWeight: '500',
                  position: 'absolute',
                  zIndex: 9,
                  right: spacing(2),
                  left: spacing(2),
                  bottom: spacing(2),
                  // top: '50%',
                  // transform: 'translateY(-50%)',
                }}
              >
                {state.caption}
              </Typography>
            </Box>
          )}
        </Box>
        <Box maxWidth={320} padding={2} width='100%'>
          {state.imageURL && (
            <Button
              fullWidth
              variant='contained'
              elevation={0}
              color='primary'
              style={{ marginBottom: spacing(1) }}
              size='large'
              startIcon={<RefreshIcon size={24} />}
              onClick={wokeThat}
            >
              Woke That
            </Button>
          )}
          <input type='file' style={{ display: 'none' }} onChange={handleChange} ref={inputRef} />
          <Button
            fullWidth
            variant='outlined'
            size='large'
            startIcon={<ImageIcon size={24} />}
            onClick={() => inputRef?.current?.click()}
          >
            {isUploading ? 'Uploading' : state.imageURL ? 'Choose a different photo' : 'Upload'}
            {' '}
            {isUploading && `${state.progress}%`}
          </Button>
        </Box>
      </Box>
    </>
  )
}

const getWokeCaption = () => {
  const caption = captions[Math.floor(Math.random() * captions.length)];
  return caption;
}
