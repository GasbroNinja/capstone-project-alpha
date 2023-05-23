import React from 'react'


const LadderHsTable = ({ ladderHSCommunity }) => {
  return (
    <>
      <tr>
        <td className="fw-bold fs-3 text-uppercase">
          &nbsp;&nbsp;{ladderHSCommunity.displayName}
        </td>
        <td className="fw-bold fs-3">{ladderHSCommunity.score}</td>
      </tr>
    </>
  );
};

export default LadderHsTable