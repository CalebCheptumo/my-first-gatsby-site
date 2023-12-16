import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="nairobi kenya"
        src="../images/pexels-antony-trivet-12851371.jpg"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
