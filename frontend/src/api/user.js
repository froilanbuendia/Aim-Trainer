const CREATE_USER_URL = 'http://localhost:8000/api/v1/users';
const USER_URL = 'http://localhost:8000/api/v1/users/username';

export async function createUser(displayName, userName, displayEmail) {
  const res = await fetch(CREATE_USER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: displayName,
      username: userName,
      email: displayEmail,
      highest_score: 0,
    }),
  });
  return res.json();
}

export async function getUser(userName) {
  const res = await fetch(USER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
    }),
  });
  return res.json();
}
// function getUser()
// export default (createUser, getUser);
