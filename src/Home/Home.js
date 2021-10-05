import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import Fakedata from '../CourseData/Fakedata';
import Fakecomment from '../CourseData/fakecomment';
import Course from '../Course/Course';
import Testemoni from '../Testemoni/Testemoni';
const Home = () => {
    const [data] = Fakedata();
    const [comments] = Fakecomment();
    const shortDatas = data.slice(6);
    const shortComments = comments.slice(3)
    return (
        <div className="main-container">
            <div className="container">
                <div className="slider">
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.studentscaring.com/wp-content/uploads/2019/12/Bengali-Grammar-Book-PDF-Download-800x445.png?189db0&189db0"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>Bangla 2nd paper class 9-10</h5>
                                <p>2000 Taka</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://play-lh.googleusercontent.com/NMIl2P3GzfI7yxgWmECl3_5Lf4tXfZsQBUZzx-pMo7rU5l1sQ_xlaumesTadkt4iKA=w412-h220-rw"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Bangla for all job</h5>
                                <p>3000 Taka</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.digitalstudyroom.com/storage/upload/courses/86/86.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Basic Math class 5-10</h5>
                                <p>5000 Taka</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="demo-courses">
                    <div className="caption py-5">
                        <h2>Our Courses</h2>
                    </div>
                    <div className="courses">
                        <div className="card-items mb-3">
                            {shortDatas.map(cours => <Course cor={cours} key={cours.index}></Course>)}
                        </div>
                    </div>
                </div>
                <div className="demo-comments">
                    <div className="caption">
                        <h2>Students Feedback</h2>
                    </div>
                    <div className="card-items">
                        {
                            shortComments.map(comment => <Testemoni comment={comment} key={comment.index}></Testemoni>)
                        }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;