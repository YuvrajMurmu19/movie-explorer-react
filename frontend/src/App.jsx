import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
   <>
   <MovieCard movie={{title:"Film1", release_date:"2025"}}/>
   <MovieCard movie={{title:"Film2", release_date:"2025"}}/>
   </>
  )
}

export default App
