import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Landing from "../pages/Landing";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" 
      element={        
          <Landing />
      } />
      <Route
        path="/terms-and-conditions"
        element={
          <Layout            
            showHeader={false}
          >
            <TermsAndConditions />
          </Layout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Layout            
            showHeader={false}
          >
            <PrivacyPolicy />
          </Layout>
        }
      />
    </Routes>
    </BrowserRouter>
  );
}
