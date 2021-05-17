import { Box, Card, CardContent, CardMedia, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    alignItems: 'center'
  },

  image: {
    height: '100%',
  }
}))

export default function MostWoke() {
  const [posts, setPosts] = useState([])
  const classes = useStyles()

  useEffect(() => {
    const subscribe = () => {
      db
        .collection('posts')
        // .sort('createdAt', 'desc')
        .limit(20)
        .onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }))
        })
    }

    subscribe()

    return () => subscribe()
  }, [])

  return (
    <Box flex={2} padding={2}>
      <Typography variant='h2'>Wokest</Typography>
      <List>
        {posts?.map(post => (
          <ListItem button>
            <ListItemText>{post.caption}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
