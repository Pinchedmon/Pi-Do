import React from "react";

import ProfileNavbar from "./components/ProfileNavbar";
import ProfileInfo from "./components/ProfileInfo";

const Profile = () => {
  return (
    <div className="h-full  bg-[#ededed]">
      <div className="p-8">
        <ProfileNavbar />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
