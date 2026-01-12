// src/App.js
import React, { useState } from 'react';
import LegalHeirForm from './components/LegalHeirForm';
import ShareholderInfo from './components/ShareholderInfo';
import OtherInfo from './components/OtherInfo';
import CompanyInfo from './components/CompanyInfo';
import SecuritiesInfo from './components/SecuritiesInfo';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    legalHeirs: [{}, {}, {}], // Three legal heirs
    shareholders: [{ sno: 1, name: '', dateOfDemise: '' }],
    otherInfo: { formDate: '', folioNumber: '', faceValue: '' },
    companyInfo: { name: '', address: '' },
    rtaInfo: { name: '', address: '' },
    securities: [
      { certificateNo: '', from: '', to: '', shares: '' },
      { certificateNo: '', from: '', to: '', shares: '' },
      { certificateNo: '', from: '', to: '', shares: '' }
    ],
    totalShares: '',
    nocDocuments: {
      deathCertificate: false,
      legalHeirCertificate: false,
      successionCertificate: false,
      affidavit: false,
      panCard: false,
      addressProof: false,
      bankPassbook: false,
      dematStatement: false
    }
  });

  const handleLegalHeirChange = (index, field, value) => {
    const updatedHeirs = [...formData.legalHeirs];
    updatedHeirs[index] = { ...updatedHeirs[index], [field]: value };
    setFormData({ ...formData, legalHeirs: updatedHeirs });
  };

  const handleShareholderChange = (index, field, value) => {
    const updatedShareholders = [...formData.shareholders];
    updatedShareholders[index] = { ...updatedShareholders[index], [field]: value };
    setFormData({ ...formData, shareholders: updatedShareholders });
  };

  const handleAddShareholder = () => {
    setFormData({
      ...formData,
      shareholders: [
        ...formData.shareholders,
        { sno: formData.shareholders.length + 1, name: '', dateOfDemise: '' }
      ]
    });
  };

  const handleOtherInfoChange = (field, value) => {
    setFormData({
      ...formData,
      otherInfo: { ...formData.otherInfo, [field]: value }
    });
  };

  const handleCompanyInfoChange = (field, value) => {
    setFormData({
      ...formData,
      companyInfo: { ...formData.companyInfo, [field]: value }
    });
  };

  const handleRTAInfoChange = (field, value) => {
    setFormData({
      ...formData,
      rtaInfo: { ...formData.rtaInfo, [field]: value }
    });
  };

  const handleSecurityChange = (index, field, value) => {
    const updatedSecurities = [...formData.securities];
    updatedSecurities[index] = { ...updatedSecurities[index], [field]: value };
    setFormData({ ...formData, securities: updatedSecurities });
  };

  const handleNOCDocumentChange = (document, checked) => {
    setFormData({
      ...formData,
      nocDocuments: { ...formData.nocDocuments, [document]: checked }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    setFormData({
      legalHeirs: [{}, {}, {}],
      shareholders: [{ sno: 1, name: '', dateOfDemise: '' }],
      otherInfo: { formDate: '', folioNumber: '', faceValue: '' },
      companyInfo: { name: '', address: '' },
      rtaInfo: { name: '', address: '' },
      securities: [
        { certificateNo: '', from: '', to: '', shares: '' },
        { certificateNo: '', from: '', to: '', shares: '' },
        { certificateNo: '', from: '', to: '', shares: '' }
      ],
      totalShares: '',
      nocDocuments: {
        deathCertificate: false,
        legalHeirCertificate: false,
        successionCertificate: false,
        affidavit: false,
        panCard: false,
        addressProof: false,
        bankPassbook: false,
        dematStatement: false
      }
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Legal Heir & Shareholder Information Form</h1>
      </header>

      <form onSubmit={handleSubmit} className="main-form">
        {/* Legal Heirs Section */}
        <div className="section-container">
          <h2>Legal Heir Information</h2>
          {formData.legalHeirs.map((heir, index) => (
            <LegalHeirForm
              key={index}
              index={index + 1}
              data={heir}
              onChange={(field, value) => handleLegalHeirChange(index, field, value)}
            />
          ))}
        </div>

        {/* Shareholders Information */}
        <div className="section-container">
          <h2>Shareholder(s) Information</h2>
          {formData.shareholders.map((shareholder, index) => (
            <ShareholderInfo
              key={index}
              data={shareholder}
              onChange={(field, value) => handleShareholderChange(index, field, value)}
            />
          ))}
          <button type="button" onClick={handleAddShareholder} className="add-button">
            + Add Another Shareholder
          </button>
        </div>

        {/* Other Important Information */}
        <div className="section-container">
          <h2>Other Important Information</h2>
          <OtherInfo
            data={formData.otherInfo}
            onChange={handleOtherInfoChange}
          />
        </div>

        {/* Securities Information */}
        <div className="section-container">
          <h2>Securities Information</h2>
          <SecuritiesInfo
            securities={formData.securities}
            totalShares={formData.totalShares}
            onSecurityChange={handleSecurityChange}
            onTotalSharesChange={(value) => setFormData({...formData, totalShares: value})}
          />
        </div>

        {/* Company's Information */}
        <div className="section-container">
          <h2>Company's Information</h2>
          <CompanyInfo
            companyData={formData.companyInfo}
            rtaData={formData.rtaInfo}
            onCompanyChange={handleCompanyInfoChange}
            onRTAChange={handleRTAInfoChange}
          />
        </div>

        {/* NOC Documents */}
        <div className="section-container">
          <h2>ANNEXURE F - NOC FROM NON CLAIMANT LEGAL HEIR</h2>
          <div className="noc-container">
            <div className="document-list">
              <h3>Document Checklist:</h3>
              {Object.entries(formData.nocDocuments).map(([doc, checked]) => (
                <div key={doc} className="document-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => handleNOCDocumentChange(doc, e.target.checked)}
                    />
                    <span>{doc.split(/(?=[A-Z])/).join(' ').toUpperCase()}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="form-buttons">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" onClick={handleReset} className="reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
