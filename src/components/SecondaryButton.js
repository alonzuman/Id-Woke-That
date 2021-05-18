import { Button } from '@material-ui/core'
import React from 'react'

export default function SecondaryButton({ style, ...rest }) {
  return (
    <Button
      variant='outlined'
      size='large'
      style={{ height: 48, ...style }}
      {...rest}
    />
  )
}
