import { Auth } from "aws-amplify";

export class API {
  userId = "";
  email = "";
  username = "";

  async signUp({ username, password, attributes }) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes,
      });
      return user;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async signIn(username, password) {
    try {
      if (!username || !password) {
        return Promise.reject("Username and Password are required");
      }
      const user = await Auth.signIn(username, password);
      const { attributes } = user;
      this.userId = attributes.sub;
      this.email = attributes.email;
      this.name = attributes.name;
      return user;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log(err);
    }
  }
  async getUserInfo() {
    const { username, attributes } = await Auth.currentUserInfo();

    this.userId = attributes.sub;
    this.email = attributes.email;
    this.username = username;
  }
}

export const api = new API();

export async function fetch(path, options) {
  if (!api.user) {
    await api.getUserInfo();
  }
  const { method, body } = options;
  const finalBody =
    method === "POST" ? { ...body, username: api.username } : body;

  return window.fetch(`${import.meta.env.VITE_API_URL}${path}`, {
    ...options,
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(finalBody),
  });
}

export const apiMixin = {
  methods: {
    signIn: api.signIn,
    signOut: api.signOut,
    signUp: api.signUp,
    getUserInfo: api.getUserInfo,
  },
};
