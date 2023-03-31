import React, { useEffect, useState } from 'react'
import Blog from './Components/blog/Blog';
import Navbar from './Components/navbar/Navbar'
import Sidecart from './Components/side-cart/Sidecart';
import Question from './Components/question/Question'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [read ,setRead] =useState([])
  const [cart, setCart] =useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(post => setData(post))
  },[]);

const readTime = (blog) => {
  
  const previousReadingTime = JSON.parse(localStorage.getItem("reading-time"));
  let readingTime =[];
  if (previousReadingTime){
    const isThisMark = previousReadingTime.find(bl => bl.id === blog.id);
    if(isThisMark){
      toast("Already Bookmarked Spent Time.")
    } else{
      readingTime.push(...previousReadingTime,blog)
      localStorage.setItem("reading-time" , JSON.stringify(readingTime))
      toast("Reading time added successfully");
    }
  } else {
    readingTime.push(blog)
    localStorage.setItem("reading-time" , JSON.stringify(readingTime))
    toast("Reading time added successfully");
  }
  setRead(readingTime)
}

const handelCart = (blog) => {
  
  const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
  let bookmark = [];
  if (previousBookmark){
    const isThisMark = previousBookmark.find(bl => bl.id === blog.id);
    if(isThisMark){
      toast("Already bookmarked it.")
    } else{
      bookmark.push(...previousBookmark,blog)
      localStorage.setItem("bookmark" , JSON.stringify(bookmark))
      toast("Bookmark added successfully");
    }
  } else { 
    bookmark.push(blog)
    localStorage.setItem("bookmark" , JSON.stringify(bookmark))
    toast("Bookmark added successfully");
  }
  setCart(previousBookmark)
  
}
  return (
    <>
     <Navbar />
     <div className='container mx-auto grid grid-cols-1 md:grid-cols-6'>
     <div className='col-span-4'>
     {data.map(blog => <Blog blog={blog} key={blog.id} handelCart={handelCart} readTime={readTime} />)}
     
     </div>
     <span className='col-span-2'>
     <Sidecart cart={cart}  read={read} />
     </span>
     </div>
     <Question />
     <ToastContainer />
     
    </>
  )
}

export default App
