import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = () => {
  return (
    <Layout pageTitle="My Blogs">
      <p>my blog articles will be here</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Post" />;

export default BlogPost;
