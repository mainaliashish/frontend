import React from "react";
import HomeCard from "../features/home/HomeCard";
import ExtraInfoCard from "../features/home/ExtraInfoCard";
import PageTitle from "../ui/PageTitle";
import HobbiesCard from "../features/hobbies/HobbiesCard";
const Home = () => {
  return (
    <>
      <PageTitle titleOne="Home Page" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 bg-none">
        <div className="mb-3">
          <HomeCard />
          <ExtraInfoCard />
        </div>
        <HobbiesCard />
      </div>
    </>
  );
};

export default Home;
