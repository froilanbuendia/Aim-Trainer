const USER_URL = 'http://localhost:8000/api/v1/users';

async function createUser(displayName, userName, displayEmail) {
  const res = await fetch(USER_URL, {
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
  // console.log('result', res.json());
  return res.json();
}
export default createUser;
