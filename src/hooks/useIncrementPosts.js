import React from 'react'
import { useMutation } from 'react-query'
import { db } from '../firebase'
import firebase from 'firebase'

const incrementPosts = async (userID) => {
  await db
    .collection('stats')
    .doc('posts')
    .update({
      count: firebase.firestore.FieldValue.increment(1)
    })
}

export default function useIncrementPosts() {
  const { mutate: increment, isLoading } = useMutation(incrementPosts)

  return { increment, isLoading }
}
