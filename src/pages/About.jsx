import React, { useState } from "react";
import Education from "../features/education/Education";
import Work from "../features/work/Work";
import PageTitle from "../ui/PageTitle";

const About = () => {
  const [showWork, setShowWork] = useState(false);
  return (
    <>
      <PageTitle
        titleOne="Education Background"
        titleTwo="Work History"
        setShowWork={setShowWork}
      />
      <Education showWork={showWork} />
      <Work showWork={showWork} />
      {}
    </>
  );
};

export default About;
