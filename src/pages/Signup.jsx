import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { firstname, lastname, email, password };

    try {
      if (isEditing) {
        const updatedUsers = [...allUsers];
        updatedUsers[editIndex] = userData;
        setAllUsers(updatedUsers);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setAllUsers([...allUsers, userData]);
      }

      
      const res = await axios.post('https://mongoose-6682.onrender.com/user/signup', userData);
      console.log('Response:', res.data);
      alert('Signup successful! Please login.');
      navigate('/signin'); 

     
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error', err.response ? err.response.data : err);
      alert('Signup failed, try again');
    }
  };

  const handleEdit = (index) => {
    const userToEdit = allUsers[index];
    setFirstname(userToEdit.firstname);
    setLastname(userToEdit.lastname);
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
      <form
        className="d-block mx-auto w-50 p-4 border rounded-3 mt-5 bg-primary-subtle shadow"
        onSubmit={handleSubmit}
      >
        <div className="text-center fs-4 fw-bold mb-3">
          {isEditing ? 'EDIT USER' : 'SIGNUP'}
        </div>

        <input
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          type="text"
          className="form-control mb-3"
          placeholder="First Name"
          required
        />

        <input
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
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
        <p>helloword</p>
        <button
          type="submit"
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
                    {user.firstname} {user.lastname}
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
