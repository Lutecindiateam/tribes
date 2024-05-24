import React from "react";
import DonationForm from "@/components/FormPage/Form";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";


const Personal = () => {
  return (
    <Layout pageTitle="Donation Form">
      <PageHeader pageTitle="Donation Form" />
      <DonationForm />
      
    </Layout>
  );
};

export default Personal;
