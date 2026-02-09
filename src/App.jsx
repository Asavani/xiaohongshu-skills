import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    uname: '',
    pname: '',
  });

  const [errors, setErrors] = useState({
    uname: '',
    pname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.uname.trim()) newErrors.uname = 'Username is required';
    if (!formData.pname.trim()) newErrors.pname = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, do something with formData
      console.log('Submitted data:', formData);
      alert(`Login successful\nUsername: ${formData.uname}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', margin: '20px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="uname"
            placeholder="Username"
            value={formData.uname}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.uname && <p style={{ color: 'red', fontSize: '12px' }}>{errors.uname}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            name="pname"
            placeholder="Password"
            value={formData.pname}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.pname && <p style={{ color: 'red', fontSize: '12px' }}>{errors.pname}</p>}
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
