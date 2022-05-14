import React, { FC, useEffect, useState } from "react";
import { getProfile } from "./Api";
import ProfileLayout from "./ProfileLayout";

const ProfileRow: FC = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const promise = getProfile();
    promise.then((personalProfile) => setProfile(personalProfile));
  }, []);

  return (
    <div>
      {profile.map((p) => (
        <ProfileLayout user={p} />
      ))}
    </div>
  );
};

export default ProfileRow;
