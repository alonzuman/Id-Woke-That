import { Button } from '@material-ui/core'
import React from 'react'

export default function PrimaryButton({ style, ...rest }) {
  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      style={{ height: 48, ...style }}
      {...rest}
    />
  )
}
