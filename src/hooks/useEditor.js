import React, { useContext } from 'react'
import { EditorContext } from '../providers/EditorProvider'

export default function useEditor() {
  return useContext(EditorContext)
}
