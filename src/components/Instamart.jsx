import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, id }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-3xl text-gray-600">{title}</h1>

      {isVisible ? (
        <button className="underline" onClick={() => setIsVisible("")}>
          Hide
        </button>
      ) : (
        <button className="underline m-2" onClick={() => setIsVisible(id)}>
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="">
      <Section
        title="About Instamart"
        description={
          "Instamart is an innovative online grocery delivery service that brings the convenience of shopping for groceries right to your doorstep. With a user-friendly mobile app and a vast selection of high-quality products, Instamart aims to make grocery shopping a hassle-free experience. We prioritize customer satisfaction, offering timely deliveries and excellent customer service. Our mission is to simplify the lives of busy individuals by providing them with a reliable and efficient way to fulfill their grocery needs."
        }
        isVisible={visibleSection === "about"}
        id="about"
        setIsVisible={setVisibleSection}
      />
      <Section
        title="Team Instamart"
        description={
          "The dedicated and talented team at Instamart is the driving force behind our success. Comprised of passionate individuals from diverse backgrounds, our team shares a common goal of revolutionizing the grocery shopping experience. From tech experts to logistics specialists, customer service representatives to marketing professionals, each member of Team Instamart plays a crucial role in ensuring the smooth operation of our service. We foster a collaborative and inclusive work environment, encouraging creativity, growth, and innovation."
        }
        isVisible={visibleSection === "team"}
        id="team"
        setIsVisible={setVisibleSection}
      />
      <Section
        title="Career at Instamart"
        description={
          "Instamart offers exciting career opportunities for individuals looking to be part of a dynamic and rapidly growing company. We value talent, dedication, and a passion for making a difference. Whether you're interested in technology, logistics, customer service, or marketing, we have a variety of roles that cater to different skill sets and aspirations. At Instamart, you'll have the chance to work with a talented team, contribute to a meaningful mission, and shape the future of the grocery industry. We provide a supportive work environment, continuous learning opportunities, and competitive compensation packages to help you thrive in your career. Join us and be part of the Instamart revolution!"
        }
        id="career"
        isVisible={visibleSection === "career"}
        setIsVisible={setVisibleSection}
      />
    </div>
  );
};

export default Instamart;
