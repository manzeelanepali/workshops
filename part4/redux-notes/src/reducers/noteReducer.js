import { createSlice } from '@reduxjs/toolkit'
import noteService from "../services/notes"


const generateId = () =>
Number((Math.random() * 1000000).toFixed(0))


 


  const noteSlice = createSlice({
    name: 'notes',
    initialState:[],
    reducers: {
      createNote(state, action) {
        return[...state,action.payload]
        // const content = action.payload
        // state.push(content)
         
      },

      appendNote(state, action) {

        return [...state,action.payload]
      },  
      setNotes(state, action) {
        return action.payload
      },

      toggleImportanceOf(state, action) {
        const id = action.payload
        const noteToChange = state.find(n => n.id === id)
        const changedNote = { 
          ...noteToChange, 
          important: !noteToChange.important 
        }
        return state.map(note =>
          note.id !== id ? note : changedNote 
        )     
      }
    },
  })

  

  export const { toggleImportanceOf,appendNote,setNotes  } = noteSlice.actions
export default noteSlice.reducer;


export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content);
    dispatch(appendNote(newNote))
  }
}
