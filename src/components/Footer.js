import { Box, Chip, Link, Typography, useTheme } from '@material-ui/core'
import React from 'react'
import usePosts from '../hooks/usePosts'

export default function Footer() {
  const { spacing } = useTheme()
  const { posts } = usePosts()

  return (
    <Box width='100%' pb={2} pt={2} display='flex' alignItems='center' justifyContent='space-between'>
      <Box flex={1} display='flex' justifyContent='flex-start'>
        <Chip
          label={<Typography>{posts} ✊</Typography>}
        />
      </Box>
      <Box display='flex' justifyContent='flex-end' flex={1}>
        <Link href="mailto:idwokethat@gmail.com">
          <Typography style={{ alignSelf: 'flex-end', marginTop: spacing(1) }} color='textSecondary'>
            Contact
        </Typography>
        </Link>
      </Box>
    </Box>
  )
}
