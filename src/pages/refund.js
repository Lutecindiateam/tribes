// import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
// import TeamOne from "@/components/TeamOne/TeamOne";
// import BeTerms from "@/components/Links/Terms";
// import Link from "next/link";
import React from "react";
// import BePolicy from "@/components/Links/policy";
import BeRefund from "@/components/Links/Refund";

const Refund = () => {
  return (
   
    <Layout pageTitle="Refund and Cancellation Policy">
        <PageHeader pageTitle="Refund and Cancellation Policy" />
       
         <BeRefund/>
    </Layout>
  );
};

export default Refund;
