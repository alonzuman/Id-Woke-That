import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import useIncrementViews from './useIncrementViews'

export default function useAnonymousAuth() {
  const { increment } = useIncrementViews()
  const [{ user }, setState] = useState({
    user: null
  })

  useEffect(() => {
    const init = async () => {
      await auth.signInAnonymously().then(v => {
        increment(v.user.uid)
      })
    }

    init()
  }, [])

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(v => {
      setState({
        user: v,
      })
    })

    return () => subscriber
  }, [])

  return { user }
}
