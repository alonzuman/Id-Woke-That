import { Box, Typography, useTheme } from '@material-ui/core'
import React from 'react'


export default function LogoURL({ fontSize = 24, color, ...rest }) {
  const { palette } = useTheme()

  return (
    <>
      <Box alignItems='flex-end' display='flex' flexDirection='column'>
        <Box
          textAlign='center'
          padding={.5}
          bgcolor={palette.secondary.dark}
          alignSelf='flex-end'
        >
          <Typography
            style={{
              fontFamily: `'Bebas Neue', cursive`,
              fontSize: 24,
              letterSpacing: .5,
              color: palette.secondary.contrastText,
            }}
            variant='h1'
          >
            #idwokethat
        </Typography>
        </Box>
      </Box>
      <Box
        textAlign='center'
        bgcolor='#000'
      >
        <Typography
          variant='body1'
          style={{
            color: palette.secondary.contrastText,
            fontSize: 12
          }}
        >
          idwokethat.web.app
        </Typography>
      </Box>
    </>
  )
}
