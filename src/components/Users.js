import React, { useState, useEffect } from 'react';
import { AppHeader } from './AppHeader';
import { Grid, Typography, Avatar } from '@material-ui/core';
import '../styles.css';
const url = 'http://localhost:5000/users';

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setUsers([...json.users]))
      .catch((err) => console.log('Error fetching users ', err.message));
  }, []);

  return (
    <div>
      <AppHeader tabValue={3} />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item style={{ marginBottom: '5vh' }}>
          <Typography variant="h3" gutterBottom>
            Bookie Users!
            <span role="img" aria-label="users">
              {' '}
              🤓🤠
            </span>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {users.map((user, key) => {
            return (
              <User
                key={key}
                firstName={user.firstName}
                lastName={user.lastName}
                userName={user.username}
                role={user.role}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

const User = ({ firstName, lastName, userName, role }) => {
  return (
    <Grid container direction="column" alignItems="center" className="User">
      <Grid item xs={12}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: '0.7em' }}
        >
          <Avatar style={{ marginRight: '0.5em' }}>
            {firstName.charAt(0)}
          </Avatar>
          <Typography variant="body2" gutterBottom>
            {userName + ' (' + role + ') '}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom color="primary">
          {firstName + ' ' + lastName}
        </Typography>
      </Grid>
    </Grid>
  );
};

const users = [
  {
    id: 'f2775f38-92fc-42e5-98a5-b137a0887a40',
    username: 'userone',
    key: '$2b$10$ph9/OK1lN/.9KzkeGKGPK.bxOkqJ2b9A2AqH/5iPkS7dmqAnUn.vi',
    firstName: 'User',
    lastName: 'One',
    favorite: [
      '6cc12b5e-cb5e-11ea-87d0-0242ac130003',
      '765384e6-cb5e-11ea-87d0-0242ac130003',
    ],
    role: 'member',
  },
  {
    id: '677c96e2-cb5e-11ea-87d0-0242ac130003',
    username: 'usertwo',
    key: '$2b$10$ruGV.xw6P0zuPUa0vt694eLO5LwckcxFZ1NfzdzDQKF12E2240vZy',
    firstName: 'User',
    lastName: 'Two',
    favorite: ['722f584a-cb5e-11ea-87d0-0242ac130003'],
    role: 'admin',
  },
];
