import React from "react";
import Layout from "@/components/Layout/Layout";
import BePolicy from "@/components/Links/Policy";
import PageHeader from "@/components/PageHeader/PageHeader";



const Policy = () => {
  return (
   
    <Layout pageTitle="Privacy Policy">
        <PageHeader pageTitle="Privacy Policy" />
       
         <BePolicy/>
    </Layout>
  );
};

export default Policy;
