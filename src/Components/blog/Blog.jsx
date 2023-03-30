import React from 'react';

const Blog = (props) => {
    const {img , title, author, author_img} = props.blog
    return (
        <div>
            <img src={img} alt="reactjs" />
  
        </div>
    );
};

export default Blog;