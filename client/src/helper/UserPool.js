import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-west-1_Ohu2m8iO4",
    ClientId: "58kvmp4kc4tb3p777da0ejk8sl"
}

export default new CognitoUserPool(poolData);