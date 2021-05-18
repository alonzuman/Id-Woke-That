import { Box, Chip, Grid, Typography } from '@material-ui/core'
import React from 'react'
import usePosts from '../hooks/usePosts'

export default function Footer() {
  const { posts } = usePosts()

  if (!posts) return null;

  return (
    <Box width='100%' padding={2} display='flex' alignItems='center' justifyContent='center'>
      <Grid justify='center' container spacing={1}>
        <Grid item>
          <Chip
            label={<Typography>{posts} ✊</Typography>}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
