import React from 'react';
import './Blog.css'

const Blog = (props) => {
    return (
        <div>
            <article className='blog'>
                <h2>Title: {props.heading}</h2>
                <h4>Author: {props.author}</h4>
                <p>This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey.This is Bunny. He was funny. He likes honey. </p>
            </article>
        </div>
    );
};

export default Blog;