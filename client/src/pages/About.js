import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>OSELabs</h1>
          <p className="text-justify mt-2">
Open Source and Enterprise Labs is a Research, Development & Training Organization founded by a team of experienced hands in the field of Open source platforms, especially in Linux who are Red Hat Certified Architects.

OSELabs places special emphasis on Infra management at its core and thereby developing products that are applicable to many essential segments like Finance, Banking, Insurance…etc.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
