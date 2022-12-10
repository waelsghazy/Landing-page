import React from 'react'
import { Article } from '../../Components';
import './Blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import';

function Blog() {
    return (
        <section className='blog section_padding' id='blog'>
            <div className="blog-heading">
                <h3 className="gradient_text">A lot is happening, <br /> We are blogging about it.</h3>
            </div>
            <div className="blog-content">
                <div className="blog-content_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="blog-content_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            </div>
        </section>
    )
}

export default Blog