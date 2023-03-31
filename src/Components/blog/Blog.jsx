import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {img , title, author, author_img,publish, reading, tag} = props.blog  
    const readTime = props.readTime;
    const handelSideCart = props.handelCart;
    return (
        <div className='w-full mb-10 px-5'>
            <img className='md:h-[550px] w-full rounded-lg mb-8' src={img} alt="reactjs" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-6'>
                    <img src={author_img} alt="author" />
                    <div >
                        <p className='md:text-2xl text-lg font-bold'>{author}</p>
                        <p className='text-base text-[#726e6e]'>{publish}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-[#726e6e]'>
                    <p>{reading} min read</p>
                    <span onClick={() => handelSideCart(props.blog)} className='hover:text-[#6047EC] cursor-pointer'><FontAwesomeIcon icon={faBookmark} />  </span> 
                </div>
            </div>
            <h1 className='my-5 text-3xl md:text-5xl font-bold'>{title}</h1>
            <p className='text-xl text-[#726e6e] my-5'>{tag}</p>
            <button onClick={() => readTime(props.blog)} className='text-xl underline pb-8 text-[#6047EC] hover:text-[#2a0ada]'>Mark as Read </button>
            <hr />
        </div>
    );
};

export default Blog;