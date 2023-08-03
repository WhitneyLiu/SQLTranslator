import { Button, CustomProvider } from "rsuite";
import { IoMdLogIn } from "react-icons/io";
import "rsuite/dist/rsuite.min.css";
import React from "react";

function App() {
  return (
    <CustomProvider theme="dark">
      <Button size="lg" endIcon={<IoMdLogIn />}>
        Login
      </Button>
      <div>test</div>
    </CustomProvider>
  );
}

export default App;
