import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-1_Oaqtgiiaz",
  ClientId: "7p3bup8g8mns5kgkugepccjatg",
};

export default new CognitoUserPool(poolData);
