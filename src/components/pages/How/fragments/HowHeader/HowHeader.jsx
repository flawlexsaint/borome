import React from "react";
import "./HowHeader.css";

import How_header_img from "../../../../images/how/how_header_img.svg";

const HowHeader = () => {
  return (
    <div className="how_grid_section">
      <div className="how_left_pane">
        <h1 className="how_header">
          It takes just 5 minutes to get your first loan
        </h1>
        <p className="how_text mt-4">
          We believe our service would enable people be confident in their
          abilities to handle unforseen pressing issues. We want our loans to
          always be available exactly when needed.
        </p>
      </div>
      <div className="how_right_pane">
        <img src={How_header_img} alt="" className="card-img" />
      </div>
    </div>
  );
};

export default HowHeader;
