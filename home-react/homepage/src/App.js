import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selections, setSelections] = useState({
    duplicate: false,
    transmission: false
  });
  
  const [formData, setFormData] = useState({
    transmissionType: 'standard',
    priority: 'normal',
    encryption: false,
    schedule: ''
  });

  // Initialize from JSON data (simulating API response)
  useEffect(() => {
    // This simulates getting data from an API/JSON
    const jsonData = {
      processes: {
        duplicate: false,
        transmission: false
      }
    };
    
    // If we have saved selections in localStorage, use them
    const savedSelections = localStorage.getItem('processSelections');
    if (savedSelections) {
      setSelections(JSON.parse(savedSelections));
    } else {
      setSelections(jsonData.processes);
    }
  }, []);

  // Save selections to localStorage when they change
  useEffect(() => {
    localStorage.setItem('processSelections', JSON.stringify(selections));
  }, [selections]);

  const handleCheckboxChange = (process) => {
    setSelections(prev => ({
      ...prev,
      [process]: !prev[process]
    }));
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProceed = () => {
    // Prepare data to send to API/next page
    const processData = {
      selectedProcesses: selections,
      transmissionFormData: selections.transmission ? formData : null
    };
    
    console.log('Proceeding with data:', processData);
    
    // In a real app, you would navigate to next page or make API call
    alert(`Proceeding with selections:\nDuplicate: ${selections.duplicate ? 'Yes' : 'No'}\nTransmission: ${selections.transmission ? 'Yes' : 'No'}`);
    
    // Here you would typically:
    // 1. Send data to your backend
    // 2. Navigate to next page using react-router
    // Example: navigate('/next-page', { state: processData });
  };

  const isProceedDisabled = !selections.duplicate && !selections.transmission;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="logo">
            <div className="logo-icon">⚡</div>
            <h1>Process Manager</h1>
          </div>
          <p className="subtitle">Select your required processes and proceed</p>
        </header>

        <main className="main-content">
          <div className="options-section">
            <h2 className="section-title">Select Processes</h2>
            <p className="section-description">
              Choose one or both processes to continue. The transmission form will appear when Transmission is selected.
            </p>
            
            <div className="options-grid">
              <div className={`option-card ${selections.duplicate ? 'selected' : ''}`}>
                <div className="option-header">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="duplicate"
                      checked={selections.duplicate}
                      onChange={() => handleCheckboxChange('duplicate')}
                      className="custom-checkbox"
                    />
                    <label htmlFor="duplicate" className="checkbox-label"></label>
                  </div>
                  <div className="option-icon">
                    <span className="icon">📋</span>
                  </div>
                </div>
                <div className="option-content">
                  <h3 className="option-title">Duplicate</h3>
                  <p className="option-description">
                    Create exact copies of your data with automatic verification and integrity checks.
                  </p>
                  <ul className="option-features">
                    <li>• Automated data replication</li>
                    <li>• Integrity verification</li>
                    <li>• Version control</li>
                  </ul>
                </div>
              </div>

              <div className={`option-card ${selections.transmission ? 'selected' : ''}`}>
                <div className="option-header">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="transmission"
                      checked={selections.transmission}
                      onChange={() => handleCheckboxChange('transmission')}
                      className="custom-checkbox"
                    />
                    <label htmlFor="transmission" className="checkbox-label"></label>
                  </div>
                  <div className="option-icon">
                    <span className="icon">📡</span>
                  </div>
                </div>
                <div className="option-content">
                  <h3 className="option-title">Transmission</h3>
                  <p className="option-description">
                    Securely transmit data across networks with encryption and priority settings.
                  </p>
                  <ul className="option-features">
                    <li>• Secure encrypted transfer</li>
                    <li>• Priority scheduling</li>
                    <li>• Real-time monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Transmission Form - Only show when Transmission is selected */}
          {selections.transmission && (
            <div className="form-section">
              <h2 className="section-title">Transmission Configuration</h2>
              <div className="form-card">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="transmissionType" className="form-label">
                      Transmission Type
                    </label>
                    <select
                      id="transmissionType"
                      name="transmissionType"
                      value={formData.transmissionType}
                      onChange={handleFormChange}
                      className="form-select"
                    >
                      <option value="standard">Standard</option>
                      <option value="express">Express</option>
                      <option value="bulk">Bulk Transfer</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="priority" className="form-label">
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleFormChange}
                      className="form-select"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="schedule" className="form-label">
                      Schedule (Optional)
                    </label>
                    <input
                      type="datetime-local"
                      id="schedule"
                      name="schedule"
                      value={formData.schedule}
                      onChange={handleFormChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group full-width">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="encryption"
                        name="encryption"
                        checked={formData.encryption}
                        onChange={handleFormChange}
                        className="custom-checkbox"
                      />
                      <label htmlFor="encryption" className="checkbox-label">
                        Enable End-to-End Encryption
                      </label>
                    </div>
                    <p className="helper-text">
                      Your data will be encrypted during transmission for maximum security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="proceed-section">
            <button
              onClick={handleProceed}
              disabled={isProceedDisabled}
              className={`proceed-button ${isProceedDisabled ? 'disabled' : ''}`}
            >
              <span className="button-text">Proceed to Next Step</span>
              <span className="button-icon">→</span>
            </button>
            
            <div className="selection-summary">
              <div className="summary-item">
                <span className="summary-label">Duplicate:</span>
                <span className={`summary-value ${selections.duplicate ? 'selected' : 'not-selected'}`}>
                  {selections.duplicate ? '✓ Selected' : '✗ Not Selected'}
                </span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Transmission:</span>
                <span className={`summary-value ${selections.transmission ? 'selected' : 'not-selected'}`}>
                  {selections.transmission ? '✓ Selected' : '✗ Not Selected'}
                </span>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>© 2023 Process Manager. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;