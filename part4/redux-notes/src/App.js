import { useEffect }   from "react";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter";
// import { useSelector,useDispatch } from "react-redux"
import noteService from './services/notes'
import { setNotes,initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'



const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
   dispatch(initializeNotes())
  }, [])
  





 return(
      <div>
          <NewNote/>
        
     <VisibilityFilter/>



        <Notes/>
          
    </div>
 )
}

  export default App;