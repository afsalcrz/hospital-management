import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography" >
      <div className="banner">
        <img src={imageUrl}  alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>BlueSky Hospital  is a state-of-the-art solution crafted to address the complexities of modern healthcare management. Designed to enhance operational efficiency and improve patient care, BlueSky HMS integrates innovative technologies with user-friendly interfaces, making it an indispensable tool for hospitals and healthcare institutions.

At its core, BlueSky Hospital focuses on optimizing every aspect of hospital operations. It provides robust features for patient management, including seamless registration, appointment scheduling, and electronic medical records (EMR). This ensures that patient information is securely stored and easily accessible, facilitating better communication between healthcare providers and patients.</p>
        <p>shanu love farhan</p>
        <p>hhhhhhh</p>
        <p>gggggggg</p>
        <p>kkkkkkk</p>
        <p>nnnnnnnnn</p>

      </div>
      
    </div>
  );
};

export default Biography;
