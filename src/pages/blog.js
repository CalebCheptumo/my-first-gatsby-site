import * as React from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Post">
      <p>My blog articles </p>
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Page" />;

export default BlogPage;
