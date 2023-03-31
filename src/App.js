import React, { useState } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    console.log('before');
    const res = await fetch('https://reqres.in/api/users?page=1');
    const jres = await res.json();
    setUser(jres.data);
  };

  return (
    <div className='App'>
      <div className='selection' >
      <h1>HELLO THERE USERS:</h1>
      <button onClick={loadUser}>GET USERS</button>
     
      <h2>USERS</h2> </div>
      <div className="container">
        <div className="row">
          {user.map(({ id, first_name, avatar, email }) => {
            return (
              <div key={id} className="col-md-4">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={avatar} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title"> Name: {first_name}</h5>
                        <h5 className="card-text">  Email: <a href ="{email}"><h5>{email}</h5></a>  </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
