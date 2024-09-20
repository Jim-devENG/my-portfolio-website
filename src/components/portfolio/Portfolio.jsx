import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Food Delivery Ecommerce Application (click on "demo" to open -> Back to our site)',
  github: 'https://github.com/Jim-devENG/food-delivery-ecommerce',
  demo: 'https://food-delivery-ecommerce-application.netlify.app/home'
  },

  {
    id: 2,
    image: IMG2,
    title: 'A Music App (Open on system ONLY)',
    github: 'https://github.com/Jim-devENG/musicApp',
    demo: 'https://music-app-omega-five.vercel.app'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Educational Website',
    github: 'https://github.com/Jim-devENG/Educational_website',
    demo: 'https://aesthetic-sorbet-004ae1.netlify.app/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Real Estate Website CANADA',
    // github: 'https://github.com',
    demo: 'https://zionhaven.com/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'TV Installation Company CANADA',
    // github: 'https://github.com',
    demo: 'https://tvinstallpro.ca/'
  },

  {
    id: 7,
    image: IMG7,
    title: 'A Legal Firm Website',
    // github: 'https://github.com',
    demo: 'https://tnllegals.com/'
  },

  {
    id: 8,
    image: IMG8,
    title: 'Real Estate Website CANADA',
    // github: 'https://github.com',
    demo: 'https://travelnursehouses.ca/'
  },

  {
    id: 9,
    image: IMG9,
    title: 'NGO Foundation Website',
    // github: 'https://github.com',
    demo: 'https://rhagfnig.org.ng/'
  },

]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
