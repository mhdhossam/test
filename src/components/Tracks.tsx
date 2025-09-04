import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress'; // Import LinearProgress for top loader
import Button from '@mui/material/Button';
import img1 from "../assets/images/Perfumes.jpg";
import img2 from "../assets/images/candles.jpg";
import img3 from "../assets/images/Crochet.jpg";
import img4 from "../assets/images/skills.jpg";
import img5 from "../assets/images/programming.jpg";
import img6 from "../assets/images/icdl.jpg";
import img7 from "../assets/images/german.jpg";

import "./CSS/Courses.css";
import "./CSS/Framework.css";
import { Link } from 'react-router-dom';

const Tracks: React.FC = () => {
  const [loading] = useState<boolean>(false);

  return (
    <>
      {/* Show LinearProgress (Top loader) if loading is true */}
      {loading && <LinearProgress color="primary" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />}

      <div className="courses-page d-grid m-20 gap-20">
        {[ 
          { image: img1, alt: "Course 1", title: "كورس تركيب العطور", path: "/course1" },
          { image: img2, alt: "Course 2", title: "كورس صناعة الشموع", path: "/course2" },
          { image: img3, alt: "Course 3", title: "كورس الكروشية", path: "/course3" },
          { image: img4, alt: "Course 4", title: "كورس مهارة التوظيف", path: "/course4" },
          { image: img5, alt: "Course 5", title: "كورس البرمجة", path: "/course5" },
          { image: img6, alt: "Course 6", title: "كورس مهارات الكمبيوتر", path: "/course6" },
          { image: img7, alt: "Course 7", title: "كورس الماني", path: "/course7" }
        ].map((course, index) => (
          <div key={index} className="course bg-white red-6 p-relative">
            <img className='cover' src={course.image} alt={course.alt} />
            <div className="title-course p-20 txt-c">
              <h1 className='m-0'>{course.title}</h1>
            </div>
            <div className="btn-course">
              <Link to={course.path}>
                <Button variant="outlined">See More</Button>
              </Link>
            </div>
          </div>
        ))}

        {/* Show loader if loading is true */}
        {loading && (
          <div className="page-loader">
            <CircularProgress color="primary" />
            <p>Loading, please wait...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tracks;