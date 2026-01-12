// src/components/SecuritiesInfo.jsx
import React from 'react';

const SecuritiesInfo = ({ securities, totalShares, onSecurityChange, onTotalSharesChange }) => {
  const handleSecurityChange = (index, e) => {
    onSecurityChange(index, e.target.name, e.target.value);
  };

  return (
    <div className="securities-info">
      <table className="securities-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Certificate Number</th>
            <th>Distinctive Number From</th>
            <th>Distinctive Number To</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          {securities.map((security, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  name="certificateNo"
                  value={security.certificateNo || ''}
                  onChange={(e) => handleSecurityChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="from"
                  value={security.from || ''}
                  onChange={(e) => handleSecurityChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="to"
                  value={security.to || ''}
                  onChange={(e) => handleSecurityChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="shares"
                  value={security.shares || ''}
                  onChange={(e) => handleSecurityChange(index, e)}
                />
              </td>
            </tr>
          ))}
          <tr className="total-row">
            <td colSpan="4" className="total-label">Total number of shares</td>
            <td>
              <input
                type="text"
                value={totalShares}
                onChange={(e) => onTotalSharesChange(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SecuritiesInfo;