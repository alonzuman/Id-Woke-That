import { Box, Typography } from '@material-ui/core'
import React from 'react'

export default function LogoURL({ fontSize = 24, color, ...rest }) {
  return (
    <Box {...rest}>
      <Typography
        style={{
          fontFamily: `'Bebas Neue', cursive`,
          fontSize,
          color
        }}
        variant='h1'
      >
        #idwokethat.web.app✊
    </Typography>
    </Box>
  )
}
