import React, { useEffect, useState } from 'react'
import './App.css'
import Blog from './Components/blog/Blog';
import Navbar from './Components/navbar/Navbar'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(post => setData(post))
  },[])
  return (
    <>
     <Navbar />
     {data.map(blog => <Blog blog={blog} key={blog.id} />)}
    </>
  )
}

export default App
