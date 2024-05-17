import React from "react";
import { FaSuitcase, FaBuilding, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const datails = [
    {
      id: 1,
      title: "1,23,441",
      SubTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      SubTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,24,200",
      SubTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      SubTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <div className="heroSection">
      <div className="container">
        <div className="title">
          <h1>Find a job that suits</h1>
          <h1>your interest and skills</h1>
          <p>
            Welcome to WorkWise, where your dream job is just a click away.
            Discover opportunities tailored to your interests and skills with
            our intuitive job-seeking platform.
          </p>
          <p>
            Whether you're a seasoned professional or just starting your career
            journey, we're here to help you find the perfect fit. Say goodbye to
            endless scrolling and let us guide you to your next career
            milestone. Get started today and unlock a world of possibilities.
          </p>
        </div>
        <div className="image">
          <img src="/HeroSection.jpg" alt="hero" />
        </div>
      </div>
      <div className="details">
        {datails.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.SubTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
