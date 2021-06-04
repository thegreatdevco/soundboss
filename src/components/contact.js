import React from "react"
import { Title } from "../components"
import { css } from "@emotion/react"

const Contact = () => {
  return (
    <section
      className="section"
      css={css`
        input,
        label,
        textarea {
          display: block;
          width: 100%;
        }

        input {
          padding: 0.75rem;
          box-shadow: var(--box-shadow);
        }

        label {
          text-transform: capitalize;
          margin: 0.5rem 0;
        }

        button {
          margin-top: 2rem;
          display: block;
          text-align: center;
          padding: 0.75rem;
        }
      `}
    >
      <Title title="contact" />
      <p>
        Get In Touch With Us At <span className="name">SoundBoss</span>{" "}
        Studios...
      </p>

      <div className="section-content">
        <form>
          <label htmlFor="name">
            name
            <input type="text" name="name" id="name" required />
          </label>
          <label htmlFor="email">
            email
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="message">
            message
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </label>
        </form>
        <button type="submit" className="btn">
          submit
        </button>
      </div>
    </section>
  )
}

export default Contact