import {
  Button,
  CustomProvider,
  Divider,
  IconButton,
  Stack,
  Panel,
  PanelGroup,
} from "rsuite";
import ReloadIcon from "@rsuite/icons/Reload";
import { IoMdLogIn } from "react-icons/io";
import "rsuite/dist/rsuite.min.css";
import "./styles/App.scss";

function App() {
  return (
    <CustomProvider theme="dark">
      <Stack
        alignItems="baseline"
        direction="row-reverse"
        justifyContent="flex-start"
      >
        <Button style={{ margin: 20 }} size="lg" endIcon={<IoMdLogIn />}>
          <strong>Login</strong>
        </Button>
      </Stack>
      <div className="app-title">
        <h2>
          <span>SQL Translator</span>
        </h2>
        <h1>Generate SQL with AI in seconds!</h1>
        <br />
      </div>
      <div className="app-detail">
        <h4>
          Generate, explain, and optimize SQL queries using AI! Improve your
          skills and save time:
        </h4>
        <br/>
        <PanelGroup className="translator-example" bordered>
          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 300 }}
          ></Panel>
          <Divider>
          <IconButton circle icon={<ReloadIcon />} />
          </Divider>
          <Panel
            shaded
            bordered
            bodyFill
            style={{ display: "inline-block", width: 300 }}
          ></Panel>
        </PanelGroup>
      </div>
    </CustomProvider>
  );
}

export default App;
