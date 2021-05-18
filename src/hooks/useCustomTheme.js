import { createMuiTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import { light, dark } from '../theme'

export default function useCustomTheme() {
  const localTheme = localStorage.getItem('theme')
  const customTheme = createMuiTheme(localTheme === 'light' ? light : dark)

  const toggleTheme = () => {
    localStorage.setItem('theme', localTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (!localTheme) {
      localStorage.setItem('theme', 'light')
    }
  }, [localTheme])

  return { toggleTheme, theme: customTheme }
}
