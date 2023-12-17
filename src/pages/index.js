import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo"

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

export const Head = () => <Seo title = "Home Page" />

export default IndexPage;
