import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import "./CSS/Testimonial.css";

const Testimonial = () => {
  const { testimonials } = useContext(Context);
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  function handleClick(i) {
    setIndex(i);
    setIsRunning(false);
  }
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [testimonials.length, isRunning]);

  return (
    <>
      <div className="testimonials-container">
        <div className="testimonials-content">
          <span className="immage">
            <img src={testimonials[index].image} alt="nopic" />
          </span>
          <h5>{testimonials[index].name}</h5>
          {/* <span>{testimonials[index].position}</span> */}
          <span>{`"${testimonials[index].quote}"`}</span>
        </div>

        <div className="testimonials-button-container">
          <ul>
            {testimonials.map((item, i) => (
              <li key={i}>
                <button key={i} onClick={() => handleClick(i)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
