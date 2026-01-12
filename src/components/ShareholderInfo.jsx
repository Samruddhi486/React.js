// src/components/ShareholderInfo.jsx
import React from 'react';

const ShareholderInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="shareholder-info">
      <div className="form-row">
        <div className="form-group">
          <label>S.No.</label>
          <input
            type="text"
            name="sno"
            value={data.sno || ''}
            readOnly
            className="read-only"
          />
        </div>

        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={data.name || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Demise (DD-MM-YYYY) *</label>
          <input
            type="date"
            name="dateOfDemise"
            value={data.dateOfDemise || ''}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ShareholderInfo;