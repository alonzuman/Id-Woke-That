import { Button, useTheme } from '@material-ui/core'
import React from 'react'

export default function PrimaryButton({ style, ...rest }) {
  const { spacing } = useTheme()

  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      style={{ maxWidth: spacing(50), height: spacing(6), ...style }}
      {...rest}
    />
  )
}
