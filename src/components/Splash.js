import { CircularProgress, Container, useTheme } from '@material-ui/core'
import React from 'react'

export default function Splash() {
  const { spacing } = useTheme()
  return (
    <Container
      maxWidth='xs'
      style={{
        minHeight: window.innerHeight,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress style={{ marginTop: spacing(6) }} />
    </Container>
  )
}
