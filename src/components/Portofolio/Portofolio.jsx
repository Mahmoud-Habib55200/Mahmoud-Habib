import React from "react";
import "./Portofolio.css";
import IMG1 from "../../assets/Screenshot (126).png";
import IMG2 from "../../assets/Screenshot (133).png";
import IMG3 from "../../assets/Screenshot (132).png";
import IMG4 from "../../assets/Screenshot (130).png";
import IMG5 from "../../assets/Screenshot (129).png";
import IMG6 from '../../assets/Screenshot (127).png'
import IMG7 from "../../assets/Screenshot (128).png";
 
const data = [
  {
    id : 1,
    image: IMG1,
    title: "Amazon Clone",
    Githup: "https://github.com/Mahmoud-Habib55200/amazon-clone",
    demo: "https://amazon-clone-eosin-delta.vercel.app/"
  } ,   {
    id : 2,
    image: IMG2,
    title: "Gem",
    Githup: "https://github.com/Mahmoud-Habib55200/myfirstdesign",
    demo: "https://myfirstdesign-jade.vercel.app/"
  }, {
    id: 3,
    image: IMG6,
    title: "Ai",
    Githup: "https://github.com/Mahmoud-Habib55200/AI-site",
    demo: "https://ai-site-lilac.vercel.app/"
  }, {
    id: 4,
    image: IMG7,
    title: "Resturanat",
    Githup: "https://github.com/Mahmoud-Habib55200/Resturanat",
    demo: "https://resturanat.vercel.app/"
  }, {
    id : 5,
    image: IMG3,
    title: "Dummy YouTube Disney",
    Githup: "https://github.com/Mahmoud-Habib55200/dummy-youtube-distney",
    demo: "https://fire-10608.web.app/"
  } ,   {
    id : 6,
    image: IMG4,
    title: "Ecommerce",
    Githup: "https://github.com/Mahmoud-Habib55200/Ecommerce-Js",
    demo: "https://ecommerce-js-9824d.web.app/"
  }, {
    id: 7,
    image: IMG5,
    title: "Project with Bootstrap",
    Githup: "https://github.com/Mahmoud-Habib55200/Website_Bootstrap",
    demo: "https://website-bootstrap-eta.vercel.app/"
  },
]


const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2 data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">Portofolio</h2>

      <div className="container portofolio__container">
     {
      data.map(({id,image,title,Githup,demo}) => {
        return(
          <article key={id} className="portofolio__item" data-aos="zoom-in-up" data-aos-duration='1500'>
          <div className="portofolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portofolio__item-cta">
            <a href={Githup}  className="btn" target="_self"> GitHub </a>
          <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
          >
              
              Live Demo
            </a>
          </div>
        </article>
        )
      })
     }
     
      </div>
    </section>
  );
};

export default Portofolio;
