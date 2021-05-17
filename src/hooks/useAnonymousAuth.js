import React, { useEffect, useState } from 'react'
import useIncrementViews from './useIncrementViews'

export default function useAnonymousAuth() {
  const { increment } = useIncrementViews()

  useEffect(() => {
    increment()
  }, [])

  return null
}
