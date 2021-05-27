import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const Hero = () => {
  return (
    <section
      css={css`
        height: 100vh;
        position: relative;
        margin-top: -5rem;

        .hero-img {
          display: block;
          height: 100%;
          background-position: bottom;
          position: relative;
        }

        .hero-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          margin-top: -10rem;
        }

        article {
          text-align: center;
          width: 85vw;
          max-width: var(--fixed-width);
        }

        h1 {
          margin: 2rem 0;
        }
      `}
    >
      {/* hero image */}
      <StaticImage
        src="../images/showcase.jpg"
        alt="row of guitars"
        layout="fullWidth"
        placeholder="tracedSVG"
        className="hero-img"
      ></StaticImage>

      {/* hero content */}
      <div className="hero-content">
        <article>
          <p className="lead">You dream it, we create it!</p>
          <h1>We make dreams make millions</h1>
          <a href="/#rooms" className="btn">
            Room Info
          </a>
        </article>
      </div>
    </section>
  )
}

export default Hero