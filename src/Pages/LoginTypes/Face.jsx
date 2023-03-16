import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
const Face = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Face Page</h1>
      <button onClick={() => navigate(PATHS.dashboard)}>Dashboard</button>
    </div>
  );
};

export default Face;
