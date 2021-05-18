import { Box, Chip, Grid, Link, Typography, useTheme } from '@material-ui/core'
import React from 'react'
import usePosts from '../hooks/usePosts'

export default function Footer() {
  const { spacing } = useTheme()
  const { posts } = usePosts()

  if (!posts) return null;

  return (
    <Box width='100%' padding={2} display='flex' alignItems='center' justifyContent='space-between'>
      {/* <Box flex={1} /> */}
      <Box flex={1} display='flex' justifyContent='flex-start'>
        <Chip
          label={<Typography>{posts} ✊</Typography>}
        />
      </Box>
      <Box display='flex' justifyContent='flex-end' flex={1}>
        <Typography style={{ alignSelf: 'flex-end', marginTop: spacing(1) }} color='textSecondary'>
          <Link href="mailto:idwokethat@gmail.com">
            Contact
        </Link>
        </Typography>
      </Box>
    </Box>
  )
}
