import React from 'react'
import { useMutation } from 'react-query'
import { db } from '../firebase'
import firebase from 'firebase'

const incrementViewes = async () => {
  await db
    .collection('stats')
    .doc('viewes')
    .update({
      count: firebase.firestore.FieldValue.increment(1)
    })
}

export default function useIncrementViews(userID) {
  const { mutate: increment, isLoading } = useMutation(incrementViewes)

  return { increment, isLoading }
}
