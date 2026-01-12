// src/components/OtherInfo.jsx
import React from 'react';

const OtherInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="other-info">
      <div className="form-row">
        <div className="form-group">
          <label>Form Date (DD-MM-YYYY)</label>
          <input
            type="date"
            name="formDate"
            value={data.formDate || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Folio Number</label>
          <input
            type="text"
            name="folioNumber"
            value={data.folioNumber || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Face Value</label>
          <input
            type="text"
            name="faceValue"
            value={data.faceValue || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;