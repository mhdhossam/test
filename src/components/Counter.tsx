import React, { useState, useEffect, useRef } from "react";
import "./CSS/Counter.css";
import CountUp from "react-countup";

// Ref type for the counter element
const Counter: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null); // Use specific HTMLDivElement type

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          if (counterRef.current) {
            observer.unobserve(counterRef.current); // Stop observing after counting starts
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div className="stats">
      <div className="container" ref={counterRef}>
        <div className="box">
          <i className="fas fa-user fa-2x fa-fw"></i>
          <span className="number">
            {startCounting && <CountUp end={500} duration={3} />}
          </span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <i className="fas fa-code fa-2x fa-fw"></i>
          <span className="number">
            {startCounting && <CountUp end={400} duration={3} />}
          </span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia fa-2x fa-fw"></i>
          <span className="number">
            {startCounting && <CountUp end={12} duration={3} />}
          </span>
          <span className="text">Countries</span>
        </div>
        <div className="box">
          <i className="fas fa-money-bill-alt fa-2x fa-fw"></i>
          <span className="number">
            {startCounting && <CountUp end={50000} duration={3} separator="," />}
          </span>
          <span className="text">Money</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
