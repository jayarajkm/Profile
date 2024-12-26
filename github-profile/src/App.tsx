import React from "react";
import Profile from "./component/Profile";
import { userData } from "./Mockdata/data";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 bg-gray-100">
      <Profile {...userData} />
    </div>
  );
};

export default App;
