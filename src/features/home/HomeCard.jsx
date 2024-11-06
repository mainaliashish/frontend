import React from "react";
import { useBasicProfile } from "./useHome";
import Spinner from "../../ui/Spinner";
import { RxGithubLogo } from "react-icons/rx";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { SiMicrosoftoutlook } from "react-icons/si";
import { SlSocialSkype } from "react-icons/sl";
import SocialLink from "../../ui/SocialLink";

const HomeCard = () => {
  const { isLoading, profile } = useBasicProfile();
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="animate-fadeIn">
        <div className="flex bg-stone-100 justify-between items-center p-4 border border-r-2 border-stone-300 shadow-md">
          <div className="">
            <p className="font-semibold p-2">Name: {profile?.fullName}</p>
            <p className="font-semibold p-2">Email: {profile?.email}</p>
            <p className="font-semibold p-2">
              Contact: {profile?.phoneNumber.slice(0, -5) + "XXXXX"}
            </p>
            <p className="font-semibold p-2">Post code: {profile?.postCode}</p>
            <p className="font-semibold p-2">Address: {profile?.address}</p>
          </div>
          <div className="self-start">
            <img
              src={profile?.avatarUrl}
              alt={profile?.fullName}
              className="h-24 rounded-full opacity-80 drop-shadow-xl"
            />
          </div>
        </div>
        <div className="bg-stone-100 mt-2 sm:mt-3 grid grid-cols-3 text-center sm:flex justify-between items-center p-4 sm:my-1 border border-r-2 border-stone-300 shadow-lg">
          <SocialLink profileUrl={profile?.github} linkText="Github">
            <RxGithubLogo /> Github
          </SocialLink>
          <SocialLink profileUrl={profile?.linkedIn} linkText="Github">
            <GrLinkedin />
            LinkedIn
          </SocialLink>
          <SocialLink profileUrl={profile?.linkedIn} linkText="Github">
            <SiMicrosoftoutlook />
            Outlook
          </SocialLink>
          <SocialLink profileUrl={profile?.linkedIn} linkText="Github">
            <SiFacebook />
            Facebook
          </SocialLink>
          <SocialLink profileUrl={profile?.linkedIn} linkText="Github">
            <BsTwitterX />
            Twitter
          </SocialLink>
          <SocialLink profileUrl={profile?.linkedIn} linkText="Github">
            <SlSocialSkype />
            Skype
          </SocialLink>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
