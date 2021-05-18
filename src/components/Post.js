import { Dialog, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import WaterMark from './WaterMark'

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 512,
    maxHeight: 768,
    position: 'relative',
    overflowY: 'hidden'
  },

  image: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#00000050'
  },

  caption: {
    textTransform: 'uppercase',
    textShadow: '0px 0px 10px #000000',
    color: '#fff',
    fontSize: 24,
    fontFamily: `"Bebas Neue", cursive`,
    textAlign: 'center',
    fontWeight: '500',
    position: 'absolute',
    zIndex: 9,
    right: theme.spacing(2),
    left: theme.spacing(2),
    bottom: theme.spacing(2),
  }
}))

export default function Post({ src, caption }) {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles()

  const toggleOpen = () => setIsOpen(!isOpen)

  if (!src) return null;

  return (
    <>
      <div onClick={toggleOpen} className={classes.container}>
        <img
          alt='Selected wokeness'
          src={src}
          className={classes.image}
        />
        <div className={classes.overlay}>
          <WaterMark />
          <Typography className={classes.caption}>
            {caption}
          </Typography>
        </div>
      </div>
      <Dialog open={isOpen} onClose={toggleOpen}>
        <div onClick={toggleOpen} className={classes.container}>
          <img
            alt='Selected wokeness'
            src={src}
            className={classes.image}
          />
          <div className={classes.overlay}>
            <WaterMark />
            <Typography className={classes.caption}>
              {caption}
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  )
}
