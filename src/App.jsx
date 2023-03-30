import React, { useEffect, useState } from 'react'
import './App.css'
import Blog from './Components/blog/Blog';
import Navbar from './Components/navbar/Navbar'
import Sidecart from './Components/side-cart/Sidecart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState([]);
  const [sidecart, setSidecart] = useState([]);
  const [read ,setRead] =useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(post => setData(post))
  },[])
  const handelSideCart = (blog) =>{
    setSidecart([...sidecart, blog])
    toast("Blog has been bookmarked successfully");
    
}
const readTime = (blog) => {
  setRead([...read, blog])
  toast("Reading time added successfully")
}
// console.log(sidecart);
  return (
    <>
     <Navbar />
     <div className='container mx-auto grid grid-cols-1 md:grid-cols-6'>
     <div className='col-span-4'>
     {data.map(blog => <Blog blog={blog} key={blog.id} handelSideCart={handelSideCart} readTime={readTime} />)}
     
     </div>
     <span className='col-span-2'>
     <Sidecart sidecart={sidecart} read={read}/>
     </span>
     </div>
     <ToastContainer />
    </>
  )
}

export default App
