import CausesDetailsPage from "@/components/CausesDetails/CausesDetails";
import CausesPage from "@/components/CausesPage/CausesPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const CausesDetails = () => {
  return (
    <Layout pageTitle="Donate">
      <PageHeader pageTitle="Donate" />
      <CausesDetailsPage   />
      {/* <CausesPage/> */}
    </Layout>
  );
};

export default CausesDetails;
