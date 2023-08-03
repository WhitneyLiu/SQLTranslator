import { Button, } from 'rsuite';
import { IoMdLogIn } from 'react-icons/io';
import 'rsuite/dist/rsuite.min.css';
import React from 'react'


function App() {
  return (
    <>
      <Button size="lg" endIcon={<IoMdLogIn />}>
        Login
      </Button>
    </>
  )
}

export default App
