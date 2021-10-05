import React from 'react';
import Course from '../Course/Course';
import CourseData from '../CourseData/Fakedata';
import './Allcourses.css'

const AllCourses = () => {
    const [coursedatas] = CourseData();
    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>All Courses</h1>
            </div>
            <div className="card-items mb-3">
                {coursedatas.map(cours => <Course cor={cours} key={cours.index}></Course>)}
            </div>



        </div>
    );
};

export default AllCourses;