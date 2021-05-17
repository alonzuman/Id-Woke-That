import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function useViewes() {
  const [viewes, setViewes] = useState(0)

  useEffect(() => {
    db.collection('stats').doc('viewes').onSnapshot(snapshot => {
      setViewes(snapshot.data())
    })
  }, [])

  return { viewes }
}
