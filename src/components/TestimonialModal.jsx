import React from "react";
import "./TestimonialModal.css";

const data = [
  {
    id: 1,
    name: "John Doe",
    title: "Web Developer",
    img: "one.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Web Designer",
    img: "two.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "James Doe",
    title: "Web Developer",
    img: "three.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Jenny Doe",
    title: "Web Designer",
    img: "four.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Jack Doe",
    title: "Web Developer",
    img: "five.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TestimonialModal = ({ index, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="close-btn" onClick={onClose}>
          &#10005;
        </div>
        <div className="inside-content">
          <div className="testimonial-img">
            <img src={`${data[index].img}`} alt={data[index].name} />
          </div>
          <div className="testimonial-info">
            <h3>{data[index].name}</h3>
            <h4>{data[index].title}</h4>
            <p>{data[index].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
