import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function usePosts() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    db.collection('stats').doc('posts').onSnapshot(s => {
      setCount(s.data().count)
    })
  }, [])

  return { posts: count }
}
