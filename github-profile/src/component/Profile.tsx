import React from "react";

interface ProfileProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
  repos: number;
  followers: number;
  following: number;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  username,
  bio,
  avatarUrl,
  repos,
  followers,
  following,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-6 space-x-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-gray-200"
        />
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-500">@{username}</p>
          <p className="text-sm text-gray-600 mt-2">{bio}</p>
        </div>
      </div>

      <div className="flex justify-around bg-gray-100 py-4">
        <div className="text-center">
          <p className="text-xl font-semibold">{repos}</p>
          <p className="text-sm text-gray-500">Repositories</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">{followers}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">{following}</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
