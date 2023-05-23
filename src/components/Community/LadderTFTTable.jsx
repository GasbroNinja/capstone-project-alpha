import React from "react";


const LadderTftTable = ({ ladderTFTCommunity }) => {
  return (
    <>
      <tr>
        <td className="fw-bold fs-3 text-uppercase">
          &nbsp;&nbsp;{ladderTFTCommunity.displayName}
        </td>
        <td className="fw-bold fs-3">{ladderTFTCommunity.score}</td>
      </tr>
    </>
  );
};

export default LadderTftTable;
