import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home" >
        <main>
          <h1>Tech Hub</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are Your one and only solution to the tech problem you face every
            day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about" >
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor
            animi quibusdam soluta perferendis culpa obcaecati veritatis!
            Consequatur laboriosam aperiam, sit earum deserunt, asperiores
            laborum quibusdam atque fugit blanditiis est ratione unde
            praesentium, possimus aspernatur numquam. Blanditiis ad nesciunt
            quis vero facere provident fugiat, alias recusandae quo commodi at
            minima architecto, autem nam nisi molestiae dolorum, harum
            laudantium ab! Illum.
          </p>
        </div>
      </div>

      <div className="home4" id="brands" >
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
