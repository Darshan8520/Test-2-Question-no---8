
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        setData(resp.data)
      })
  }, [])
  return (
    <>
      {
        data.map((item) => {
          console.log(item)
          return (
            <div>
              <div>{item.id}</div>
              <div>{item.userId}</div>
              <div>{item.body}</div>
              <div>{item.title}</div>
            </div>
          )
        })
      }
    </>
  );
}

export default App;
