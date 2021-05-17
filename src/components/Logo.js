import { Box, Typography } from '@material-ui/core'
import React from 'react'

export default function Logo({ fontSize = 24, ...rest }) {
  return (
    <Box {...rest}>
      <Typography
        style={{
          fontFamily: 'monospace',
          fontSize
        }}
        variant='h1'
      >
        #idwokethat✌️
    </Typography>
    </Box>
  )
}
