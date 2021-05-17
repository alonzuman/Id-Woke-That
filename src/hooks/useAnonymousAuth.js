import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import useIncrementViews from './useIncrementViews'

export default function useAnonymousAuth() {
  const { increment } = useIncrementViews()

  useEffect(() => {
    increment()
  }, [])

  return null
}
