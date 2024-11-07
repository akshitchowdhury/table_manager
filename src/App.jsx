import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Main from './component/MainPage/Main'
import DragDropComponent from './component/DND/DragDropComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
      {/* <Button>Click me</Button> */}
      <DragDropComponent/>
    </>
  )
}

export default App
