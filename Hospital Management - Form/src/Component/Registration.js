import React from 'react';

const RegistrationForm = () => {
  const formWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
    
  };

  const formContainerStyle = {
    width: '500px',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    
    
  };

  const titleContainerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    
  };

  const inputContainerStyle = {
    marginBottom: '15px',
    padding:'1px',
  };

  const inputFieldStyle = {
    marginBottom: '15px',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={formWrapperStyle}>
      <div style={formContainerStyle}>
      
        <div style={titleContainerStyle}>
          <h2>Patient Registration Form</h2>
        </div>
        <div>
          <form>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-user" aria-hidden="true"></i></span>
                <label htmlFor="name">Name</label>
                <br/>
                <input type="text" id="name" name="name" placeholder="Name" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-envelope" aria-hidden="true"></i></span>
                <label htmlFor="email">Email</label>
                <br/>
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-phone" aria-hidden="true"></i></span>
                <label htmlFor="phone">Phone Number</label>
                <br/>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-calendar" aria-hidden="true"></i></span>
                <label htmlFor="dob">Date of Birth</label>
                <br/>
                <input type="date" id="dob" name="dob" placeholder="Date of Birth" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-user" aria-hidden="true"></i></span>
                <label htmlFor="age">Age</label>
                <br/>
                <input type="number" id="age" name="age" placeholder="Age" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-home" aria-hidden="true"></i></span>
                <label htmlFor="address">Address</label>
                <br/>
                <input type="text" id="address" name="address" placeholder="Address" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-globe" aria-hidden="true"></i></span>
                <label htmlFor="country">Country</label>
                <br/>
                <input type="text" id="country" name="country" placeholder="Country" required />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <div style={inputFieldStyle}>
                <span style={iconStyle}><i className="fa fa-user-md" aria-hidden="true"></i></span>
                <label htmlFor="consultantDoctor">Consultant Doctor</label>
                <br/>
                <select id="consultantDoctor" name="consultantDoctor" required>
                  <option value="" disabled selected>Select Consultant Doctor</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="dermatologist">Dermatologist</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <input style={buttonStyle} className="button" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
