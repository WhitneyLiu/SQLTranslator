import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-1_PbsnTApaq",
  ClientId: "304anfvvkobj22dlmrfmc3nu0l",
};

export default new CognitoUserPool(poolData);
