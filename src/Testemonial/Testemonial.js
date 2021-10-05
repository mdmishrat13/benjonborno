import React from 'react';
import Fakecomment from './../CourseData/fakecomment'
import Testemoni from '../Testemoni/Testemoni';
const Testemonial = () => {
    const [comments] = Fakecomment();
    console.log(comments)
    return (
        <div>
            <div className="title">
                <h1>Students Feedback</h1>
            </div>
            {
                comments.map(comment => <Testemoni comment={comment} key={comment.index}></Testemoni>)
            }
        </div>

    );
};

export default Testemonial;