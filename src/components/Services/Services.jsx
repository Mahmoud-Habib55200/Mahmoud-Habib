import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">Servieces</h2>

      <div className="container servieces_container">
        <article className="serviece" data-aos="fade-right">
          <div className="serviece_head">
            <h3>eCommerce Store Management</h3>
          </div>

          <ul className="serviece__list">
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Product management & Market Analysis</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Creating Eye Catchy Landing pages</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Dealing with Dropshipping stores worldwide</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Woocommerce full setup</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Applying Perfect themes according to owner's prespective</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Creative Ideas to get a good market share.</p>
            </li>
          </ul>
        </article>
        <article className="serviece" data-aos="zoom-out-up" >
          <div className="serviece_head">
            <h3>Web Development</h3>
          </div>

          <ul className="serviece__list">
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Interactive website with beautiful animations.</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Readable & Reusable Code - Clean Code..</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>
                React Hooks for state management & updating data. like useState
                & useEffect.
              </p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Fetching Restful APIs with Axios.</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Google Maps & Others.</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Creating trendy websites like Uber, kwai and TikTok.</p>
            </li>
          </ul>
        </article>
        <article className="serviece"  data-aos="fade-left">
          <div className="serviece_head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="serviece__list">
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Facebook & Instagram Marketing .</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Google & Youtube Ads .</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Google Analytics & Daily Report.</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Google Analytics & Daily Report.</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Google Analytics & Daily Report.</p>
            </li>
            <li>
              <BiCheck className="serviece__list-icon" />
              <p>Google Analytics & Daily Report.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
