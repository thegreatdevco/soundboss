import React from "react"
import { Title } from "../components"
import aboutContent from "../constants/about-content"
import { css } from "@emotion/react"

const About = () => {
  return (
    <section
      className="section"
      css={css`
        .section-content {
          display: grid;
          grid-gap: 4rem;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .icon {
          color: var(--color-primary);
          font-size: 4rem;
        }

        h4 {
          margin: 1rem 0;
        }

        @media screen and (min-width: 738px) {
          .about-content {
            margin-top: 6rem;
          }
        }
      `}
    >
      {/* title */}
      <Title title="About" />
      <p className="tagline">
        some info about <span className="name">SoundBoss</span> studios...
      </p>

      {/* content */}
      <div className="section-content">
        {aboutContent.map(({ id, icon, label, text }) => {
          return (
            <article key={id}>
              <h3>{icon}</h3>
              <h4>{label}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default About
