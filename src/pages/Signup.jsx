import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setAllUsers(JSON.parse(storedUsers));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(allUsers));
  }, [allUsers]);

  
  const handleSubmit = () => {
    if (isEditing) {
      const updatedUsers = [...allUsers];
      updatedUsers[editIndex] = { firstName, lastName, email, password };
      setAllUsers(updatedUsers);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const userData = { firstName, lastName, email, password };
      setAllUsers([...allUsers, userData]);
    }

    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  
  const handleEdit = (index) => {
    const userToEdit = allUsers[index];
    setFirstName(userToEdit.firstName);
    setLastName(userToEdit.lastName);
    setEmail(userToEdit.email);
    setPassword(userToEdit.password);
    setIsEditing(true);
    setEditIndex(index);
  };

 
  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const remainingUsers = allUsers.filter((_, i) => i !== index);
      setAllUsers(remainingUsers);
    }
  };

  return (
    <>
      
      <form className="d-block mx-auto w-50 p-4 border rounded-3 mt-5 bg-success-subtle shadow">
        <div className="text-center fs-4 fw-bold mb-3">
          {isEditing ? 'EDIT USER' : 'SIGNUP'}
        </div>

        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          className="form-control mb-3"
          placeholder="First Name"
          required
        />

        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          className="form-control mb-3"
          placeholder="Last Name"
          required
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
        />

        <button
          onClick={handleSubmit}
          type="button"
          className={`btn ${isEditing ? 'btn-warning' : 'btn-primary'} w-100 p-2 rounded-2`}
        >
          {isEditing ? 'Update User' : 'Signup'}
        </button>
      </form>

      
      <div className="container mt-5">
        <div className="row justify-content-center">
          {allUsers.map((user, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
            >
              <div
                className="card shadow-lg text-center border-0"
                style={{
                  width: '300px',
                  background: 'linear-gradient(135deg, #7c5cff, #00d4ff)',
                  color: 'white',
                  borderRadius: '20px',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    {user.firstName} {user.lastName}
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="card-text">
                    <strong>Password:</strong> {user.password}
                  </p>

                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(index)}
                      className="btn btn-light btn-sm rounded-pill px-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger btn-sm rounded-pill px-3"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Signup;
