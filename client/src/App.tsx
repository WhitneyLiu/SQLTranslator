import { Divider, IconButton, Navbar, Nav, Panel, PanelGroup } from "rsuite";
import ReloadIcon from "@rsuite/icons/Reload";
import { IoMdLogIn } from "react-icons/io";
import "rsuite/dist/rsuite.min.css";
import "./styles/App.scss";
import { useState } from "react";

const exampleText = [
  {
    text: "a PostgreSQL constraint allows only one of the following columns to be null: email, user_id",
    translation: "ALTER TABLE users \nADD CONSTRAINT only_one_null \nCHECK (\n(email IS NOT NULL AND user_id IS NULL)\nOR (email IS NULL AND user_id IS NOT NULL) ...",
  },
  {
    text: "convert the product names to uppercase and set discounts to 10%",
    translation: "UPDATE Products \nSET name = UPPER(name), discount = 0.1 ...",
  },
  {
    text: "show which product generated the most revenue",
    translation: "SELECT product_id, SUM(quantity * price) AS revenue\nFROM order_items\nGROUP BY product_id\nORDER BY revenue DESC\nLIMIT 1 ...",
  },
  {
    text: "find all users who live in California and have over 1000 ",
    translation: "",
  },
  {
    text: "set discount to 10% for the top 5 most popular products",
    translation: "SELECT * FROM users WHERE state='CA' AND credits > 1000; \n...",
  },
  {
    text: "list the most popular products",
    translation: "SELECT product_id, COUNT(*) AS num_orders\nFROM orders\nGROUP BY product_id\nORDER BY num_orders DESC\nLIMIT 10 ...",
  },
  {
    text: "show the average, minimum, and maximum product price",
    translation: "SELECT AVG(price), MIN(price), MAX(price) FROM products \n...",
  },
];

function App() {
  const [example, setExample] = useState(exampleText.at(0));

  return (
    <>
      <Navbar appearance="inverse" className="main-navbar">
        <Navbar.Brand href="/">
          <strong>SQL Translator</strong>
        </Navbar.Brand>
        <Nav pullRight>
          <Nav pullRight>
            <Nav.Item className="login-button" icon={<IoMdLogIn />}>
              <strong>Login</strong>
            </Nav.Item>
          </Nav>
        </Nav>
      </Navbar>
      <div className="app-title">
        <h1>Create AI-powered SQL statements within seconds!</h1>
        <br />
        <h4>
          Utilize AI to craft, clarify, and enhance your SQL queries swiftly.
          Elevate your proficiency and reclaim valuable time:
        </h4>
      </div>
      <br />
      <div className="app-detail">
        <PanelGroup className="translator-example" bordered>
          <Panel
            bodyFill
            style={{ display: "inline-block", width: 300 }}
          >{example ? example.text: ""}</Panel>
          <Divider>
            <IconButton appearance="ghost" circle icon={<ReloadIcon />} />
          </Divider>
          <Panel
            bodyFill
            style={{ display: "inline-block", width: 300 }}
          >{example ? example.translation: ""}</Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
