import { Button } from '@material-ui/core'
import React from 'react'

export default function SecondaryButton({ ...rest }) {
  return (
    <Button
      variant='outlined'
      size='large'
      {...rest}
    />
  )
}
