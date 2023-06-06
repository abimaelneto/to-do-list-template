const cognitoURL = "https://todo-list-academy.auth.us-east-2.amazoncognito.com";
const client_id = "5lse2dlg6igbnatbdvc8g6idiu";
const redirect_uri = "http://localhost:5173";

export const logoutURL = `${cognitoURL}/logout?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`;
