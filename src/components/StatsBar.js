import { Box, Chip, Grid, Typography } from '@material-ui/core'
import React from 'react'
import usePostsCount from '../hooks/usePostsCount'
import useViewes from '../hooks/useViewes'

export default function StatsBar() {
  const { viewes } = useViewes()
  const { posts } = usePostsCount()

  return (
    <Box width='100%' padding={2} display='flex' alignItems='center' justifyContent='center'>
      <Grid justify='center' container spacing={1}>
        <Grid item>
          <Chip
            label={<Typography>{viewes} 👀</Typography>}
          />
        </Grid>
        <Grid item>
          <Chip
            label={<Typography>{posts} 🙏🏻</Typography>}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
