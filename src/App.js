import React, { useState} from "react";
import "./App.css";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageAnimationClass, setImageAnimationClass] = useState("fade-in");

  const items = [
    {
      title: "X-CODE Self-Adhesive Label",
      description:
        "This contains the X-CODE also in the form of a QR code and can be augmented with customer-specific material numbers and other information. The integrated labeling of the hose line in accordance with DIN 20066 does away with the usual embossing of the fitting. The protective laminate is suitable for high temperatures up to 240 °C.",
      image: "https://hansa-flex.hu/wp-content/uploads/Services_X-CODE_03_1.jpg",
    },
    {
      title: "X-CODE Tip Tag with Cable Tie",
      description:
        "The distinctive yellow-black Tip Tag marker on black cable ties has been the traditional method of attachment for the X-CODE since 2004. The marker can be removed and attached to the replacement component in the branch. Also available with QR code.",
      image: "https://www.hansa-flex.de/fileadmin/hansaflex/Services/Preventive_Maintenance/Hose_Management/X-Code/Services_X-CODE_03_2.jpg",
    },
    {
      title: "X-CODE Stainless Steel Cable Tie",
      description:
        "The X-CODE VA cable is manufaactured in SS316 stainless steel and is suitable for use in extreme temperatures of -80 °C to +538 °C. Its areas of use include high-temperature applications and the food industry. The code is applied by laser engraving.",
      image: "https://www.hansa-flex.de/fileadmin/hansaflex/Services/Preventive_Maintenance/Hose_Management/X-Code/Services_X-CODE_03_3.jpg",
    },
    {
      title: "X-CODE Cable Tie with RFID Chip",
      description:
        "The X-CODE cable tie with RFID chip can be read automatically using a scanner or an app. This is useful in avoiding transcription errors in difficult to access installation situations where there are many hose lines.",
      image: "https://www.hansa-flex.de/fileadmin/hansaflex/Services/Preventive_Maintenance/Hose_Management/X-Code/Services_X-CODE_03_4.jpg",
    },
    {
      title: "X-CODE Shrink Hose",
      description:
        "For hose lines used in areas where particulaly good corrosion protection for fittings is required, the X-CODE can also be attached using a shrink hose. The X-CODE shrink hose is a highly flexible, temperature resistant and flame-suppressant polyolefin heat shrink hose.",
      image: "https://www.hansa-flex.de/fileadmin/hansaflex/Services/Preventive_Maintenance/Hose_Management/X-Code/Services_X-CODE_03_5.jpg",
    },
  ];

  const handlePrev = () => {
    setImageAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setImageAnimationClass("fade-in")
    }, 500);
  };

  const handleNext = () => {
    setImageAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setImageAnimationClass("fade-in");
    }, 500);
  };

  return (
    <div className="product-carousel">
      <div className="carousel-description">
        <ul className="product-list">
          {items.map((item, index) => (
            <li
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => {
                setImageAnimationClass("fade-out");
                setTimeout(() => {
                  setCurrentIndex(index);
                  setImageAnimationClass("fade-in");
                }, 500);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className={`carousel-description-content ${imageAnimationClass}`}>
          <p>{items[currentIndex].description}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className="carousel-image">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className={imageAnimationClass}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;