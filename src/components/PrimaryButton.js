import { Button } from '@material-ui/core'
import React from 'react'

export default function PrimaryButton({ ...rest }) {
  return (
    <Button
      variant='contained'
      color='primary'
      size='large'
      {...rest}
    />
  )
}
