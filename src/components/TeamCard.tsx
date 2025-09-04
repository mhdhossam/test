import React from 'react';
import './CSS/Home.css';
import './CSS/About.css';

interface TeamCardProps {
  name: string;
  image: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, image, description }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />
      <div className="part">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
