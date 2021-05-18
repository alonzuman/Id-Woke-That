import { Button, useTheme } from '@material-ui/core'
import React from 'react'

export default function SecondaryButton({ style, ...rest }) {
  const { spacing } = useTheme()

  return (
    <Button
      variant='outlined'
      size='large'
      style={{ maxWidth: spacing(50), height: spacing(6), ...style }}
      {...rest}
    />
  )
}
