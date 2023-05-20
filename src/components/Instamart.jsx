import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, id }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-3xl">{title}</h1>

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
    <div>
      <Section
        title="About Instamart"
        description={
          "With the rise of internet orders, particularly in the food and grocery industries, in recent years Swiggy has started its latest initiative, Instamart, with the goal of delivering groceries and other necessities.Instamart is a chain of online convenience stores. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience stores.Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs."
        }
        isVisible={visibleSection === "about"}
        id="about"
        setIsVisible={setVisibleSection}
      />
      <Section
        title="Team Instamart"
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "team"}
        id="team"
        setIsVisible={setVisibleSection}
      />
      <Section
        title="Career at Instamart"
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        id="career"
        isVisible={visibleSection === "career"}
        setIsVisible={setVisibleSection}
      />
    </div>
  );
};

export default Instamart;
