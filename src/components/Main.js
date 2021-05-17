import { Container } from '@material-ui/core'
import React from 'react'
import useAnonymousAuth from '../hooks/useAnonymousAuth'
import Editor from './Editor'
import Splash from './Splash'
import StatsBar from './StatsBar'

export default function Main() {
  const { user } = useAnonymousAuth()

  if (!user) return <Splash />

  return (
    <Container
      maxWidth='lg'
      style={{
        minHeight: window.innerHeight,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Editor />
      <StatsBar />
    </Container>
  )
}