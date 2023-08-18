import { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../helper/UserPool";

const AccountContext = createContext();

const Account = (props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSession();
  },[])
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject(err);
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};
                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                    if (Name === 'email') {
                      setEmail(Value);
                    }
                  }
                  resolve(results);
                }
              });
            });
            resolve({ user, ...session, ...attributes});
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username, Password, setNotification) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          setNotification({
            show: true,
            isError: true,
            title: "Error!",
            message: err.message,
          });
          reject(err);
        },
        newPasswordRequired: (data) => {
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout, email }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
