import React from 'react'
import { Table } from 'react-bootstrap';

const LadderHsTable = ({ ladderHSCommunity }) => {
  return (
    <>
      <tr>
        <td className="fw-bold fs-3 text-uppercase">
          🥇&nbsp;&nbsp;{ladderHSCommunity.displayName1}
        </td>
        <td className="fw-bold fs-3">{ladderHSCommunity.score1}</td>
      </tr>
      <tr>
        <td className="fw-bold fs-3 text-uppercase">
          🥈&nbsp;&nbsp;{ladderHSCommunity.displayName2}
        </td>
        <td className="fw-bold fs-3">{ladderHSCommunity.score2}</td>
      </tr>
      <tr>
        <td className="fw-bold fs-3 text-uppercase">
          🥉&nbsp;&nbsp;{ladderHSCommunity.displayName3}
        </td>
        <td className="fw-bold fs-3">{ladderHSCommunity.score3}</td>
      </tr>
    </>
  );
};

export default LadderHsTable