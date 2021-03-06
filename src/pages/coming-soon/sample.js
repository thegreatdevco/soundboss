import React from "react"
import { Contact, Info, Layout, Seo } from "../../components"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const SamplePage = () => {
  return (
    <Layout>
      <Seo
        title="Coming Soon"
        description="future content coming to SoundBoss studios"
      />
      <section
        className="section"
        css={css`
          text-align: center;
          margin-top: 10vh;

          header {
            margin-bottom: 4rem;
          }

          p {
            margin-top: 1rem;
          }

          .btn {
            margin-top: 2rem;
          }
        `}
      >
        <header>
          <h1>Coming Soon...</h1>
          <p>
            This page is reserved for future content coming soon to{" "}
            <span className="name">SoundBoss</span> studios.
          </p>
          <Link to="/" className="btn">
            back home
          </Link>
        </header>

        <Contact />
        <Info />
      </section>
    </Layout>
  )
}

export default SamplePage
