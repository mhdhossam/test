import React from "react";
import "../CSS/InfoCards.css";
import onlineBilling from "../../assets/images/onlineBilling.png";
import Scheduling from "../../assets/images/scheduling.png";
import Community from "../../assets/images/Community.png";

// Define the shape of each card object
interface Card {
  id: number;
  title: string;
  description: string;
  src: string;
}

// Array of card data
const cardsData: Card[] = [
  {
    id: 1,
    title: "Online Billing",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    src: onlineBilling,
  },
  {
    id: 2,
    title: "Scheduling",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    src: Scheduling,
  },
  {
    id: 3,
    title: "Community",
    description:
      "Join our vibrant Daleel community and connect with people who share your passions! Here.",
    src: Community,
  },
];

const InfoCards: React.FC = () => {
  return (
    <div className="card-container">
      <div className="cards-info">
        {cardsData.map((card) => (
          <div className="card-info" key={card.id}>
            <img src={card.src} alt={card.title} className="card-image" />
            <div className="card-info-body">
              <h3 className="card-title" style={{ marginTop: "-27px" }}>
                {card.title}
              </h3>
              <p className="card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards; // Export the component
