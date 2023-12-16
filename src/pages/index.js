import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>Hi, I'm building a fake Gatsby site as part of a tutorial!</h1>
      <Link to = '/about'>About</Link>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </main>
  );
};

export const Head = () => (
  <>
    <title>Home Page</title>;
    <meta name="description" content="This is a fake Gatsby site" />
  </>
);

export default IndexPage;
