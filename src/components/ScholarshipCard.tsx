import React from "react";
import "../components/CSS/Scholarship.css";
import "../components/CSS/Courses.css";
import "../components/CSS/Home.css";
import image from "../assets/images/scholorshipcards.png";
import { Link } from "react-router-dom";

// Define the prop types
interface ScholarshipCardProps {
  title: string;
  description: string;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ title, description }) => {
  return (
    <div className="scholarship-card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/scholarshipInfo">
        <button className="find-more-btn">Find More</button>
      </Link>
    </div>
  );
};

export default ScholarshipCard;
