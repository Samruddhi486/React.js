// src/components/CompanyInfo.jsx
import React from 'react';

const CompanyInfo = ({ companyData, rtaData, onCompanyChange, onRTAChange }) => {
  const handleCompanyChange = (e) => {
    onCompanyChange(e.target.name, e.target.value);
  };

  const handleRTAChange = (e) => {
    onRTAChange(e.target.name, e.target.value);
  };

  return (
    <div className="company-info">
      <div className="company-section">
        <h3>Company Details</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Company Name *</label>
            <input
              type="text"
              name="name"
              value={companyData.name || ''}
              onChange={handleCompanyChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company Address *</label>
            <textarea
              name="address"
              value={companyData.address || ''}
              onChange={handleCompanyChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="company-section">
        <h3>RTA Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label>RTA Name *</label>
            <input
              type="text"
              name="name"
              value={rtaData.name || ''}
              onChange={handleRTAChange}
              required
            />
          </div>

          <div className="form-group">
            <label>RTA Address *</label>
            <textarea
              name="address"
              value={rtaData.address || ''}
              onChange={handleRTAChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;