import Warning from "./Warning";
import {
  containsNumber,
  containsSpecialCharacter,
  containsUppercase,
  containsLowercase,
} from "../helper/password";

export default function PasswordCheck(props) {
  const password = props.password;
  return (
    <>
      {password.length < 8 && <Warning message="8-character minimum" />}
      {!containsNumber(password) && (
        <Warning message="Contains at least 1 number" />
      )}
      {!containsSpecialCharacter(password) && (
        <Warning message="Contains at least 1 special character" />
      )}
      {!containsUppercase(password) && (
        <Warning message="Contains at least 1 uppercase letter" />
      )}
      {!containsLowercase(password) && (
        <Warning message="Contains at least 1 lowercase letter" />
      )}
    </>
  );
}
