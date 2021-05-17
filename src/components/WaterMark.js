import { Box, useTheme } from '@material-ui/core'
import React from 'react'
import LogoURL from './LogoURL'

export default function WaterMark() {
  const { palette, spacing } = useTheme()

  return (
    <Box
      position='absolute'
      top={spacing(1)}
      right={spacing(1)}
    >
      <LogoURL
        fontSize={16}
      />
    </Box>
  )
}
