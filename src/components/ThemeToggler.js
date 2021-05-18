import { Switch } from '@material-ui/core'
import React from 'react'
import useCustomTheme from '../hooks/useCustomTheme'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useCustomTheme()

  return (
    <Switch
      checked={theme.palette.type === 'dark'}
      onChange={toggleTheme}
    />
  )
}
