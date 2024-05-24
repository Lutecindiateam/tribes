import React from "react";
import AboutPage from "@/components/AboutPage/AboutPage";

import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";



const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader pageTitle="About" />
      <AboutPage />
     
    </Layout>
  );
};

export default About;
