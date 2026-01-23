// src/components/LegalHeirForm.jsx
import React from 'react';

const LegalHeirForm = ({ index, data, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="legal-heir-form">
      <h3>Legal Heir {index}</h3>
      <div className="form-grid">
        {/* Contact Details */}
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
          <label>Age *</label>
          <input
            type="number"
            name="age"
            value={data.age || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Relation with Shareholder *</label>
          <input
            type="text"
            name="relation"
            value={data.relation || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Father's Name *</label>
          <input
            type="text"
            name="fatherName"
            value={data.fatherName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>PAN Card Number *</label>
          <input
            type="text"
            name="panNumber"
            value={data.panNumber || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Demat Account Number *</label>
          <input
            type="text"
            name="dematAccount"
            value={data.dematAccount || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address *</label>
          <textarea
            name="address"
            value={data.address || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pin Code *</label>
          <input
            type="text"
            name="pinCode"
            value={data.pinCode || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>City *</label>
          <input
            type="text"
            name="city"
            value={data.city || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>State *</label>
          <input
            type="text"
            name="state"
            value={data.state || ''}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            value={data.mobile || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={data.email || ''}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bank Details */}
        <div className="form-group full-width">
          <h4>Bank Account Details</h4>
        </div>

        <div className="form-group">
          <label>Account Number *</label>
          <input
            type="text"
            name="accountNumber"
            value={data.accountNumber || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Bank Name *</label>
          <input
            type="text"
            name="bankname"
            value={data.bankName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Bank Branch *</label>
          <input
            type="text"
            name="branch"
            value={data.branch || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>IFSC Code *</label>
          <input
            type="text"
            name="ifsc"
            value={data.ifsc || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Bank City *</label>
          <input
            type="text"
            name="bankCity"
            value={data.bankCity || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Bank Pin Code *</label>
          <input
            type="text"
            name="bankPinCode"
            value={data.bankPinCode || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>MICR Number *</label>
          <input
            type="text"
            name="micr"
            value={data.micr || ''}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default LegalHeirForm;


