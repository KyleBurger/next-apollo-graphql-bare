import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <HomeContainer>
      <article>
        <img className="rotate" src="/assets/nagsc-logo.png" alt="NAGSC Logo" />
        <p>
          Welcome to this Next JS w/ GraphQL, Apollo &amp; Styled Components
          template. Feel free to hack away and make the next greatest app.
        </p>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Learn Next
        </a>
        <p className="inspired-by">
          <i>The style of of this home page is inspired by Create React App</i>
        </p>
      </article>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  article {
    max-width: 60rem;
    margin: 10rem auto 0;
    padding: 0 3rem;

    img {
      max-width: 30rem;

      @media screen and (max-width: 600px) {
        max-width: 28rem;
      }
      @media screen and (max-width: 480px) {
        max-width: 25rem;
      }
      @media screen and (max-width: 400px) {
        max-width: 22rem;
      }
      @media screen and (max-width: 320px) {
        max-width: 20rem;
      }
    }

    p {
      margin: 6rem auto 3rem;

      &.inspired-by {
        font-size: 0.9em;
      }
    }

    a {
      color: lightblue;
      font-size: 2rem;
    }
  }
`;
