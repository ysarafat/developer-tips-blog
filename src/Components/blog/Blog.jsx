import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {img , title, author, author_img,publish, reading} = props.blog
    return (
        <div>
            <img src={img} alt="reactjs" />
            <div>
                <div>
                    <img src={author_img} alt="author" />
                    <div>
                        <p>{author}</p>
                        <p>{publish}</p>
                    </div>
                </div>
                <div>
                    <p>{reading} min read</p>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>
  
        </div>
    );
};

export default Blog;