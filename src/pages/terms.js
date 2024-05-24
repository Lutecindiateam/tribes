// import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
// import TeamOne from "@/components/TeamOne/TeamOne";
import BeTerms from "@/components/Links/Terms";
// import Link from "next/link";
import React from "react";

const Terms = () => {
  return (
   
    <Layout pageTitle="Terms and Conditions">
        <PageHeader pageTitle="Terms and Conditions" />
       
         <BeTerms/>
    </Layout>
  );
};

export default Terms;
