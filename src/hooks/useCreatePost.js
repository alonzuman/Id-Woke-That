import React from 'react'
import { useMutation } from 'react-query'
import { db } from '../firebase'
import firebase from 'firebase'

const createPost = ({ caption, imageURL }) => {
  db.collection('stats')
    .doc('posts')
    .update({
      count: firebase.firestore.FieldValue.increment(1)
    })

  db.collection('posts')
    .add({
      imageURL,
      caption,
      createdAt: Date.now()
    })
    .catch(e => console.log(e))
}

export default function useCreatePost() {
  const { mutate, isLoading } = useMutation(createPost)

  return { createPost: mutate, isLoading }
}
