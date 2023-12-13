import React from 'react';

const RegistrationForm = () => {
  const formWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formContainerStyle = {
    width: '400px',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleContainerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputFieldStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const radioCheckboxOptionStyle = {
    marginBottom: '15px',
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
          <h2>Responsive Registration Form</h2>
        </div>
        <div>
          <form>
            <div style={inputFieldStyle}>
              <span style={iconStyle}><i className="fa fa-envelope" aria-hidden="true"></i></span>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div style={inputFieldStyle}>
              <span style={iconStyle}><i className="fa fa-lock" aria-hidden="true"></i></span>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <div style={inputFieldStyle}>
              <span style={iconStyle}><i className="fa fa-lock" aria-hidden="true"></i></span>
              <input type="password" name="password" placeholder="Re-type Password" required />
            </div>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ flex: '1' }}>
                <div style={inputFieldStyle}>
                  <span style={iconStyle}><i className="fa fa-user" aria-hidden="true"></i></span>
                  <input type="text" name="name" placeholder="First Name" />
                </div>
              </div>
              <div style={{ flex: '1' }}>
                <div style={inputFieldStyle}>
                  <span style={iconStyle}><i className="fa fa-user" aria-hidden="true"></i></span>
                  <input type="text" name="name" placeholder="Last Name" required />
                </div>
              </div>
            </div>
            <div style={radioCheckboxOptionStyle} className="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1" />
              <label htmlFor="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2" />
              <label htmlFor="rd2">Female</label>
            </div>
            <div style={radioCheckboxOptionStyle} className="input_field checkbox_option">
              <input type="checkbox" id="cb1" />
              <label htmlFor="cb1">I agree with terms and conditions</label>
            </div>
            <div style={radioCheckboxOptionStyle} className="input_field checkbox_option">
              <input type="checkbox" id="cb2" />
              <label htmlFor="cb2">I want to receive the newsletter</label>
            </div>
            <input style={buttonStyle} className="button" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;