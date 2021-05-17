import { Box, Button, Grid, Typography, useTheme } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid';
import RefreshIcon from '@material-ui/icons/Refresh';
import ImageIcon from '@material-ui/icons/Image';
import captions from '../captions';
import Logo from './Logo';
import WaterMark from './WaterMark';
import useCreatePost from '../hooks/useCreatePost';

const imageID = uuid();
export default function ImageUploader() {
  const { spacing } = useTheme()
  const [state, setState] = useState({
    progress: 0,
    downloadURL: '',
    caption: ''
  })
  const inputRef = useRef(null)
  const taskRef = storage.ref(`/images/${imageID}`)
  const isUploading = state.progress !== 0 && state.progress !== 100
  const { createPost } = useCreatePost()

  const handleChange = e => {
    const file = e.target.files[0];
    const task = taskRef.put(file)

    task.on('state_changed', handleStateChange, handleError, handleCompletion)
  }

  const handleStateChange = s => {
    const progress = Math.round((s.bytesTransferred / s.totalBytes) * 100);
    setState(s => {
      return {
        ...s,
        progress
      }
    })
  }

  const handleError = e => console.log(e)

  useEffect(() => {
    if (state.caption) {
      createPost({
        imageURL: state.downloadURL,
        caption: state.caption
      })
    }

  }, [state.caption, state.imageURL])

  const handleCompletion = () => {
    taskRef.getDownloadURL()
      .then(v => {
        wokeThat()
        setState(s => {
          return {
            ...s,
            downloadURL: v
          }
        })
      })
  }

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
        <Logo fontSize={32} mb={1} />
        {!state.downloadURL && <Typography style={{ marginTop: spacing(2) }}>Reprehenderit est proident qui velit ipsum. Nisi consequat ex nostrud minim Lorem et ea mollit velit laboris qui nisi. Ullamco veniam adipisicing consectetur Lorem cupidatat sint culpa. Occaecat qui in eu duis aute qui.</Typography>}
      </Box>
      <Box width='100%' padding={2} display='flex' flexDirection='column' alignItems='center' flex={4}>
        <Box height='100%' width='100%' maxWidth={512} position='relative'>
          {state.downloadURL && (
            <img
              src={state.downloadURL}
              style={{
                objectFit: 'contain',
                height: '100%',
                width: '100%',
                maxHeight: 512
              }}
            />
          )}
          {state.downloadURL && (
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
                  textShadow: '0px 0px 10px #00000099',
                  color: '#fff',
                  fontSize: 24,
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
          {state.downloadURL && (
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
            {isUploading ? 'Uploading' : state.downloadURL ? 'Choose a different photo' : 'Upload'}
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
