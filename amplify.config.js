import { Amplify, Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "us-east-2",
    userPoolId: "us-east-2_IYK8bjhUM",
    userPoolWebClientId: "2fvth1atjvg1vabe9ip8u3kqdt",
  },
});

// You can get the current config object
export const currentConfig = Auth.configure();
