import React, { createContext, useState } from 'react'
import captions from '../captions'

export const EditorContext = createContext()

export default function EditorProvider({ children }) {
  const [state, setState] = useState({
    progress: 0,
    imageURL: '',
    caption: ''
  })

  const updateCaption = () => {
    const caption = captions[Math.floor(Math.random() * captions.length)];
    updateState({
      caption
    })
  }

  const updateState = (updater) => {
    setState(s => ({
      ...s,
      ...updater,
    }))
  }

  return (
    <EditorContext.Provider value={{ state, updateState, updateCaption }}>
      {children}
    </EditorContext.Provider>
  )
}

