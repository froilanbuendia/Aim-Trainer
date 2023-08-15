const USER_URL = 'http://localhost:8000/api/v1/users';

export async function createUser(displayName, userName, displayEmail) {
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
  return res.json();
}

export async function getUser(userName) {
  const res = await fetch(
    `${USER_URL}/user?${new URLSearchParams({ username: userName }).toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return res.json();
}
