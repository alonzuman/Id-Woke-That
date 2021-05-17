import React from 'react'
import { useMutation } from 'react-query'
import { db } from '../firebase'
import firebase from 'firebase'

const incrementViewes = async (userID) => {
  await db
    .collection('stats')
    .doc('viewes')
    .update({
      users: firebase.firestore.FieldValue.arrayUnion(userID)
    })
}

export default function useIncrementViews(userID) {
  const { mutate: increment, isLoading } = useMutation(incrementViewes)

  return { increment, isLoading }
}
