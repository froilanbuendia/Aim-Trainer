import {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000").then(
      response => response.json()
    ).then(
      data => { 
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {backendData.length === 0 ? (
        <p>Loading... </p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}
export default App
